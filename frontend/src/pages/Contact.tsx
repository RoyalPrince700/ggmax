import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { companyInfo, services } from '../data/services'

type FormStatus = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const [demoNote, setDemoNote] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (String(data.get('website') || '').trim()) {
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    setError('')
    setDemoNote(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          service: data.get('service'),
          message: data.get('message'),
          website: data.get('website'),
        }),
      })
      const result = (await response.json()) as { success?: boolean; demo?: boolean; message?: string }
      if (!response.ok || !result.success) {
        setStatus('idle')
        setError(result.message || 'The message was not sent. Please call or email the farm.')
        return
      }
      setDemoNote(Boolean(result.demo))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('idle')
      setError('The message was not sent. Please call or email the farm.')
    }
  }

  return (
    <>
      <PageBanner
        title="Contact the farm"
        crumb="Contact"
        image="/images/yard.jpg"
      />

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Amoyo, Kwara State</span>
            <h2 className="section-title contact-heading">
              Talk to GgMax Ilorin
            </h2>
          </Reveal>

          <div className="contact-grid">
            <Reveal>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><MapPin size={26} /></div>
                <h3>Farm</h3>
                <p>{companyInfo.address}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Phone size={26} /></div>
                <h3>Call</h3>
                <p>
                  {companyInfo.phones.map((p) => (
                    <span key={p.href}>
                      <a href={p.href}>{p.display}</a>
                      <br />
                      <small>{p.label}</small>
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Mail size={26} /></div>
                <h3>Email</h3>
                <p>
                  {companyInfo.emails.map((mail) => (
                    <span key={mail.href}>
                      <a href={mail.href}>{mail.display}</a>
                      <br />
                      <small>{mail.label}</small>
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="contact-split">
            <Reveal>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a message</h2>
                <p>Orders, supply and visits. Say whether you need broilers, eggs, feed or a tour.</p>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="0803 000 0000" />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Enquiry</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="">General enquiry</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What do you need from the farm?"
                    required
                  />
                </div>

                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : (
                    <>Send Message <span className="arrow">→</span></>
                  )}
                </button>
                {status === 'sent' && !demoNote && (
                  <p className="form-status">
                    Received. The farm will reply by email.
                  </p>
                )}
                {status === 'sent' && demoNote && (
                  <p className="form-status">
                    This server is not delivering email yet. Please call 0803 821 7248 or email solaojo.fe@unilorin.edu.ng.
                  </p>
                )}
                {error && <p className="form-status form-status-error">{error}</p>}
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="presence-panel">
                <p className="kicker">Visit and write</p>
                <h2>Where to find us</h2>
                <p>
                  The chicken farm is at Amoyo. Letters and official mail go through the Department
                  of Animal Production on the University of Ilorin campus.
                </p>
                <ul className="visit-list">
                  <li>
                    <strong>Farm</strong>
                    <span>{companyInfo.address}</span>
                  </li>
                  <li>
                    <strong>University</strong>
                    <span>{companyInfo.postal}</span>
                  </li>
                  <li>
                    <strong>Chairman’s office</strong>
                    <span>{companyInfo.office}</span>
                  </li>
                </ul>
                <div className="map-frame">
                  <iframe
                    title="Map of Amoyo, Kwara State"
                    src="https://maps.google.com/maps?q=Amoyo%2C%20Kwara%2C%20Nigeria&z=12&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
