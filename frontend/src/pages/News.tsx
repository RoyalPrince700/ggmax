import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { news } from '../data/news'

export default function News() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    }
  }, [hash])

  return (
    <>
      <PageBanner
        title="News"
        crumb="News"
        image="/images/processing.jpg"
      />

      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">GgMax and Unilorin poultry</span>
            <h2 className="section-title">What is happening</h2>
            <p className="section-lede">
              The Chairman’s appointment, plus poultry reports published by the University of Ilorin
              and the press.
            </p>
          </Reveal>

          {news.map((item) => (
            <article className="news-story" id={item.id} key={item.id}>
              <Reveal className="media">
                <img
                  className={item.image.endsWith('solaojo.png') ? 'portrait' : undefined}
                  src={item.image}
                  alt={item.image.endsWith('solaojo.png') ? 'Prof. Foluke E. Sola-Ojo' : ''}
                  loading="lazy"
                />
              </Reveal>
              <Reveal delay={80}>
                <p className="news-meta">
                  <time>{item.dateLabel}</time>
                  <span aria-hidden="true">·</span>
                  {item.sourceUrl ? (
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {item.source}
                    </a>
                  ) : (
                    <span>{item.source}</span>
                  )}
                </p>
                <h2>{item.title}</h2>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
