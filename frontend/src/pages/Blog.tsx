import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { posts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <PageBanner title="Blog" crumb="Blog" image="/images/yard.jpg" />

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">From Amoyo</span>
            <h2 className="section-title">Notes from the chicken farm</h2>
            <p className="section-lede">
              How GgMax raises broilers, collects eggs, mills feed, and trains students on the yard.
            </p>
          </Reveal>

          <div className="news-grid">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <Link to={`/blog/${post.slug}`} className="news-card">
                  <div className="thumb">
                    <img src={post.image} alt={post.imageAlt} loading="lazy" />
                  </div>
                  <div className="body">
                    <time>{post.dateLabel}</time>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="more">
                      Read post <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
