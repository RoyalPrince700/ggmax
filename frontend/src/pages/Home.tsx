import { Link } from 'react-router-dom'
import { Egg, GraduationCap, Leaf, Shield, Wheat, type LucideIcon } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import CtaBand from '../components/CtaBand'
import { services } from '../data/services'
import { news } from '../data/news'

const values: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: Egg, name: 'Birds & eggs', text: 'Broilers for meat and layers for table eggs, raised on one yard.' },
  { icon: Shield, name: 'Care of the flock', text: 'Pens, feed and processing sit together so the birds stay on a managed site.' },
  { icon: Wheat, name: 'Own feed', text: 'A mill rated at 5 tonnes an hour supplies rations for the houses.' },
  { icon: Leaf, name: 'Nothing wasted', text: 'Manure from the pens is processed for farmers who need it on their crops.' },
  { icon: GraduationCap, name: 'A university farm', text: 'Students and researchers in Animal Production learn on a working poultry enterprise.' },
]

export default function Home() {
  const latest = news.slice(0, 3)

  return (
    <>
      <Hero />

      <div className="stats-band">
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-value"><Counter end={40} suffix="k" /></div>
            <div className="stat-label">Broiler capacity</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter end={33} suffix="k" /></div>
            <div className="stat-label">Layer capacity</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter end={5} suffix=" t/h" /></div>
            <div className="stat-label">Feed mill</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter end={1000} /></div>
            <div className="stat-label">Birds processed a day</div>
          </div>
        </div>
      </div>

      <section className="feature-band">
        <Reveal className="feature-panel">
          <div className="feature-media">
            <img src="/images/flock.jpg" alt="Brown laying hens in a poultry yard" loading="lazy" />
          </div>
          <div className="feature-copy rule-right">
            <h2>The farm</h2>
            <p>
              Unilorin GgMax is the University of Ilorin chicken farm at Amoyo, in Ifelodun
              Local Government Area of Kwara State. The name is short for Gallus gallus
              domesticus Max — the domestic chicken, at commercial scale.
            </p>
            <Link to="/about" className="text-cta">
              About the farm <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="services-section">
        <div className="container">
          <Reveal className="center">
            <span className="kicker">What the farm does</span>
            <h2 className="section-title">Chicken, from pen to product</h2>
            <p className="section-lede">
              Broilers, layers, feed, dressing and manure — one integrated poultry yard at Amoyo.
            </p>
          </Reveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 100}>
                <Link to={`/services#${s.id}`} className="service-card">
                  <div className="thumb">
                    <img src={s.image} alt={s.imageAlt ?? s.title} loading="lazy" />
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="body">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="more">
                      Learn More <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-band">
        <Reveal className="feature-panel flip">
          <div className="feature-copy rule-left">
            <h2>Prof. Foluke E. Sola-Ojo</h2>
            <p>
              Chairman of Unilorin GgMax Farm. She is the University’s first female Professor of
              Animal Production, and she helped name GgMax when the project was set up under the
              Central Bank poultry scheme.
            </p>
            <Link to="/news#chairman-sola-ojo" className="text-cta">
              Read the appointment <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="feature-media">
            <img className="portrait" src="/images/solaojo.png" alt="Prof. Foluke E. Sola-Ojo" loading="lazy" />
          </div>
        </Reveal>
      </section>

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">From the farm</span>
            <h2 className="section-title">News</h2>
            <p className="section-lede">
              Prof. Foluke E. Sola-Ojo, and recent poultry news from the University of Ilorin.
            </p>
          </Reveal>

          <div className="news-grid">
            {latest.map((item, i) => (
              <Reveal key={item.id} delay={i * 90}>
                <Link to={`/news#${item.id}`} className="news-card">
                  <div className="thumb">
                    <img
                      className={item.image.endsWith('solaojo.png') ? 'portrait' : undefined}
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="body">
                    <time>{item.dateLabel}</time>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="more">
                      Read <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="center news-more">
            <Link to="/news" className="btn btn-green">
              All news <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <Reveal className="center">
            <span className="kicker" style={{ color: 'var(--gold-400)' }}>How the farm is run</span>
            <h2 className="section-title">Built around the chicken</h2>
            <p className="section-lede">
              GgMax was commissioned in July 2022 as an integrated commercial poultry farm, the
              first of the university projects under the Central Bank scheme.
            </p>
          </Reveal>

          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 90}>
                <div className="value-card">
                  <div className="icon" aria-hidden="true"><v.icon size={26} /></div>
                  <h3>{v.name}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
