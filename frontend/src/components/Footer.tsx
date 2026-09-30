import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import BrandMark from './BrandMark'
import { services, companyInfo } from '../data/services'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <BrandMark />
            </div>
            <p>
              Unilorin GgMax Farm is the University of Ilorin chicken farm at Amoyo. The yard
              raises broilers and layers, mills feed, and dresses birds for the market.
            </p>
          </div>

          <div>
            <h4>Farm</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About the farm</Link></li>
              <li><Link to="/services">Poultry operations</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>What we produce</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <span className="ico" aria-hidden="true"><MapPin size={16} /></span>
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Phone size={16} /></span>
                <span>
                  {companyInfo.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && <br />}
                      <a href={p.href}>{p.display}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Mail size={16} /></span>
                <a href={companyInfo.emailHref}>{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {companyInfo.fullName}.</span>
          <span>{companyInfo.legalName}</span>
        </div>
      </div>
    </footer>
  )
}
