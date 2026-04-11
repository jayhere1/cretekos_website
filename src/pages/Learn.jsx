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

function Learn() {
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === activeCategory)

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

      {/* ── CATEGORY FILTERS ── */}
      <div className="category-filters">
        <div className="category-filters-inner">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── POSTS GRID ── */}
      <div className="posts-grid">
        {filteredPosts.length === 0 ? (
          <div className="posts-empty">
            No posts found in this category yet. Check back soon.
          </div>
        ) : (
          filteredPosts.map((post) => (
            <Link
              to={`/learn/${post.slug}`}
              key={post.slug}
              className="post-card"
            >
              <span className="post-category-badge">{post.categoryLabel}</span>
              <h2 className="post-card-title">{post.title}</h2>
              <p className="post-card-excerpt">{post.excerpt}</p>
              <div className="post-card-meta">
                <span className="post-card-date">{formatDate(post.date)}</span>
                <span className="post-card-readtime">{post.readTime}</span>
              </div>
              <span className="post-card-link">Read more</span>
            </Link>
          ))
        )}
      </div>
    </main>
  )
}

export default Learn
