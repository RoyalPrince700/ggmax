import { Link } from 'react-router-dom'
import { Check, Rocket, Target } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { companyInfo } from '../data/services'

export default function About() {
  return (
    <>
      <PageBanner
        title="Unilorin GgMax Farm"
        crumb="The farm"
        image="/images/flock.jpg"
      />

      <section>
        <div className="container split">
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2 className="section-title">
              A chicken farm of the University of Ilorin
            </h2>
            <p className="section-lede">
              GgMax is the University of Ilorin Gallus gallus domesticus Max Farm. It stands at
              Amoyo, in Ifelodun Local Government Area of Kwara State, and it was built to raise
              chickens at commercial scale: broilers for meat and layers for eggs.
            </p>
            <p className="section-lede">
              The Central Bank of Nigeria and the University commissioned the farm on 21 July 2022
              under the Tertiary Institutions Poultry Revival Scheme. Zenith Bank was the
              participating bank. The University holds the project through {companyInfo.spv}.
            </p>
            <Link to="/services" className="btn btn-green" style={{ marginTop: 30 }}>
              See the poultry yard <span className="arrow">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120} className="split-media">
            <img
              className="main-img"
              src="/images/processing.jpg"
              alt="A hen on open grass"
              loading="lazy"
            />
            <img
              className="float-img"
              src="/images/eggs.jpg"
              alt="Brown table eggs"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Leadership</span>
            <h2 className="section-title">Prof. Foluke E. Sola-Ojo</h2>
          </Reveal>

          <div className="split" style={{ marginTop: 36 }}>
            <Reveal className="founder-photo">
              <img src="/images/solaojo.png" alt="Prof. Foluke E. Sola-Ojo" />
              <div className="founder-chip">
                Chairman
                <strong>Prof. Foluke E. Sola-Ojo</strong>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="founder-role">Prof. Foluke E. Sola-Ojo</p>
              <p className="founder-rc">Ph.D., RAS · Animal Breeding and Genetics</p>
              <p className="section-lede">
                Prof. Foluke E. Sola-Ojo has been appointed Chairman of Unilorin GgMax Farm. She is the
                University’s first female Professor of Animal Production and the first female Head
                of the Department of Animal Production.
              </p>
              <ul className="check-list">
                <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> First female Head of Animal Production, July 2023</li>
                <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> First female Professor of Animal Production, October 2023</li>
                <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Nigerian University Doctoral Thesis Award, Agriculture, 2010</li>
                <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Former Plant Manager, Feed Masters Limited</li>
                <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Secretary of the technical committee that delivered GgMax under the CBN scheme</li>
              </ul>
              <p className="section-lede">
                <a href="mailto:solaojo.fe@unilorin.edu.ng">solaojo.fe@unilorin.edu.ng</a>
              </p>
              <Link to="/news#chairman-sola-ojo" className="text-cta">
                Full announcement <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Direction</span>
            <h2 className="section-title">Why the farm exists</h2>
          </Reveal>

          <div className="vm-grid">
            <Reveal>
              <div className="vm-card vision">
                <div className="glyph" aria-hidden="true"><Target size={28} /></div>
                <h3>Food on the table</h3>
                <p>
                  To put more chicken and eggs into Kwara and Nigeria from a university farm that
                  can also train the people who will run the next poultry businesses.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="vm-card mission">
                <div className="glyph" aria-hidden="true"><Rocket size={28} /></div>
                <h3>One yard, every step</h3>
                <p>
                  Raise the birds, mill their feed, dress the broilers, and process the manure —
                  so the farm sells food, not only live chickens.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <Reveal className="split-media">
            <img
              className="main-img"
              src="/images/feed.jpg"
              alt="Wheat grain used in poultry feed"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="kicker">At commissioning</span>
            <h2 className="section-title">What was built at Amoyo</h2>
            <p className="section-lede">
              Figures below are the installed capacities stated when the farm was commissioned in
              July 2022.
            </p>
            <ul className="check-list">
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Six broiler pens of 5,000 birds, and two more planned, for 40,000 broilers</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Four layer pens, installed capacity 33,000 birds</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Feed mill, 5 tonnes an hour</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Processing line, 1,000 birds a day</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Manure processing unit</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
