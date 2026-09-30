import { WhatsAppIcon, whatsappLink } from '../data/whatsapp'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Ask about birds, eggs or a visit</h2>
          <p>
            GgMax Ilorin is the University of Ilorin chicken farm at Amoyo. Call the Department
            of Animal Production, email the Chairman, or send a message on the department line.
          </p>
        </div>
        <a href={whatsappLink()} className="btn btn-wa" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Message the farm
        </a>
      </div>
    </section>
  )
}
