import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts, categories } from '../content/posts'
import './Learn.css'

function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function Learn() {
  const [activeCategory, setActiveCategory] = useState('all')
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filtered = activeCategory === 'all' ? posts : posts.filter(p => p.category === activeCategory)
  const featured = filtered[0] || null
  const rest = filtered.slice(1)

  return (
    <>
      <section className="du-page-head du-paper">
        <div className="eyebrow">Learn · <span className="deva">ज्ञान</span> · Μάθηση</div>
        <h1>From the groves<br/>to your <em>kitchen</em>.</h1>
        <div className="deva">जैतून के बागों से आपकी रसोई तक</div>
        <p className="lede">Health, heritage, recipes, and kitchen tips — everything you need to bring the world's finest olive oil into your everyday Indian cooking.</p>
      </section>

      <div className="l-filter">
        {categories.map(cat => (
          <button key={cat.id} className={activeCategory === cat.id ? 'active' : ''} onClick={() => setActiveCategory(cat.id)}>{cat.name}</button>
        ))}
      </div>

      <section className="l-posts">
        {featured && (
          <Link to={`/learn/${featured.slug}`} className="l-feat">
            <div className="l-feat-left">
              <span className="l-cat-badge">{featured.categoryLabel}</span>
              <h2>{featured.title}</h2>
            </div>
            <div className="l-feat-right">
              <p>{featured.excerpt}</p>
              <div className="l-meta">
                <span>{featured.author}</span>
                <span className="dot"></span>
                <span>{formatDate(featured.date)}</span>
                <span className="dot"></span>
                <span>{featured.readTime}</span>
              </div>
              <span className="l-link">Read more →</span>
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <div className="l-grid">
            {rest.map(post => (
              <Link to={`/learn/${post.slug}`} key={post.slug} className="l-card">
                <span className="l-cat-badge">{post.categoryLabel}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="l-meta">
                  <span>{formatDate(post.date)}</span>
                  <span className="dot"></span>
                  <span>{post.readTime}</span>
                </div>
                <span className="l-link">Read more →</span>
              </Link>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="l-empty">No posts found in this category yet.</div>
        )}
      </section>
    </>
  )
}
