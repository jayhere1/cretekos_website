import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts, categories } from '../content/posts'
import './Learn.css'

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const CATEGORY_COLORS = {
  health: '#4A6741',
  recipes: '#D4842A',
  heritage: '#B8973B',
  'kitchen-tips': '#C4714A',
}

function Learn() {
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  const featuredPost = filteredPosts[0] || null
  const remainingPosts = filteredPosts.slice(1)

  return (
    <main className="learn-page">
      {/* ── HERO ── */}
      <section className="learn-hero">
        <div className="learn-hero-content">
          <div className="section-label">The Journal</div>
          <h1>
            Learn About <em>Olive Oil</em>
          </h1>
          <p className="learn-hero-subtitle">
            From the groves of Crete to your kitchen in India — explore the
            history, health benefits, and culinary craft behind the world's
            finest olive oil.
          </p>
        </div>
      </section>

      {/* ── SECTION DECORATION ── */}
      <div className="learn-section-divider" aria-hidden="true">
        <svg className="olive-branch-svg" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 20 Q160 20 200 20 Q240 20 280 20" stroke="rgba(184,151,59,0.2)" strokeWidth="1" />
          <ellipse cx="155" cy="15" rx="8" ry="5" transform="rotate(-30 155 15)" fill="rgba(74,103,65,0.15)" stroke="rgba(74,103,65,0.25)" strokeWidth="0.5" />
          <ellipse cx="170" cy="24" rx="8" ry="5" transform="rotate(20 170 24)" fill="rgba(74,103,65,0.12)" stroke="rgba(74,103,65,0.2)" strokeWidth="0.5" />
          <ellipse cx="230" cy="15" rx="8" ry="5" transform="rotate(30 230 15)" fill="rgba(74,103,65,0.15)" stroke="rgba(74,103,65,0.25)" strokeWidth="0.5" />
          <ellipse cx="245" cy="24" rx="8" ry="5" transform="rotate(-20 245 24)" fill="rgba(74,103,65,0.12)" stroke="rgba(74,103,65,0.2)" strokeWidth="0.5" />
          <circle cx="200" cy="20" r="2.5" fill="rgba(184,151,59,0.35)" />
          <path d="M145 12 Q150 8 155 15" stroke="rgba(74,103,65,0.2)" strokeWidth="0.5" fill="none" />
          <path d="M160 28 Q165 30 170 24" stroke="rgba(74,103,65,0.2)" strokeWidth="0.5" fill="none" />
          <path d="M225 12 Q230 8 235 15" stroke="rgba(74,103,65,0.2)" strokeWidth="0.5" fill="none" />
          <path d="M240 28 Q245 30 250 24" stroke="rgba(74,103,65,0.2)" strokeWidth="0.5" fill="none" />
          {/* Greek key motif — left */}
          <path d="M40 20 H70 V14 H55 V26 H70" stroke="rgba(184,151,59,0.12)" strokeWidth="0.8" fill="none" />
          <path d="M75 20 H95 V14 H85 V26 H95" stroke="rgba(184,151,59,0.08)" strokeWidth="0.8" fill="none" />
          {/* Greek key motif — right */}
          <path d="M360 20 H330 V14 H345 V26 H330" stroke="rgba(184,151,59,0.12)" strokeWidth="0.8" fill="none" />
          <path d="M325 20 H305 V14 H315 V26 H305" stroke="rgba(184,151,59,0.08)" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      {/* ── CATEGORY FILTERS ── */}
      <div className="category-filters">
        <div className="category-filters-inner">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              style={
                activeCategory === cat.id && cat.id !== 'all'
                  ? { '--tab-accent': CATEGORY_COLORS[cat.id] || 'var(--gold)' }
                  : {}
              }
            >
              <span className="tab-diamond" aria-hidden="true">&#9671;</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── POSTS ── */}
      {filteredPosts.length === 0 ? (
        <div className="posts-section">
          <div className="posts-empty">
            No posts found in this category yet. Check back soon.
          </div>
        </div>
      ) : (
        <div className="posts-section">
          {/* Featured hero article */}
          {featuredPost && (
            <Link
              to={`/learn/${featuredPost.slug}`}
              className="post-card post-card--featured"
              style={{ '--card-accent': CATEGORY_COLORS[featuredPost.category] || 'var(--gold)' }}
            >
              <span className="post-card-watermark" aria-hidden="true">
                {featuredPost.title.charAt(0)}
              </span>
              <div className="post-card-inner">
                <span className="post-category-badge">{featuredPost.categoryLabel}</span>
                <h2 className="post-card-title">{featuredPost.title}</h2>
                <p className="post-card-excerpt">{featuredPost.excerpt}</p>
                <div className="post-card-meta">
                  <span className="post-card-author">{featuredPost.author}</span>
                  <span className="post-card-meta-dot">&#183;</span>
                  <span className="post-card-date">{formatDate(featuredPost.date)}</span>
                  <span className="post-card-meta-dot">&#183;</span>
                  <span className="post-card-readtime">{featuredPost.readTime}</span>
                </div>
                <span className="post-card-link">Read more</span>
              </div>
            </Link>
          )}

          {/* Remaining posts grid */}
          {remainingPosts.length > 0 && (
            <div className="posts-grid">
              {remainingPosts.map((post) => (
                <Link
                  to={`/learn/${post.slug}`}
                  key={post.slug}
                  className="post-card"
                  style={{ '--card-accent': CATEGORY_COLORS[post.category] || 'var(--gold)' }}
                >
                  <span className="post-card-watermark" aria-hidden="true">
                    {post.title.charAt(0)}
                  </span>
                  <div className="post-card-inner">
                    <span className="post-category-badge">{post.categoryLabel}</span>
                    <h2 className="post-card-title">{post.title}</h2>
                    <p className="post-card-excerpt">{post.excerpt}</p>
                    <div className="post-card-meta">
                      <span className="post-card-date">{formatDate(post.date)}</span>
                      <span className="post-card-readtime">{post.readTime}</span>
                    </div>
                    <span className="post-card-link">Read more</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  )
}

export default Learn
