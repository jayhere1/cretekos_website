import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPostsByCategory } from '../content/posts'
import './Recipes.css'

export default function Recipes() {
  const recipePosts = getPostsByCategory('recipes')
  const featuredRecipe = recipePosts.length > 0 ? recipePosts[0] : null
  const remainingRecipes = recipePosts.slice(1)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="recipes-page">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="recipes-hero">
        {/* Decorative mandala SVG background */}
        <svg className="recipes-hero-mandala" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="400" cy="400" r="120" />
            <circle cx="400" cy="400" r="180" />
            <circle cx="400" cy="400" r="240" />
            <circle cx="400" cy="400" r="300" />
            <circle cx="400" cy="400" r="360" />
            {/* Petal rings */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * Math.PI / 180
              const x1 = 400 + 120 * Math.cos(angle)
              const y1 = 400 + 120 * Math.sin(angle)
              const x2 = 400 + 360 * Math.cos(angle)
              const y2 = 400 + 360 * Math.sin(angle)
              return <line key={`r${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
            })}
            {/* Inner petals */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * Math.PI / 180
              const cx = 400 + 200 * Math.cos(angle)
              const cy = 400 + 200 * Math.sin(angle)
              return <circle key={`p${i}`} cx={cx} cy={cy} r="40" />
            })}
            {/* Outer petals */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * Math.PI / 180
              const cx = 400 + 300 * Math.cos(angle)
              const cy = 400 + 300 * Math.sin(angle)
              return <circle key={`o${i}`} cx={cx} cy={cy} r="24" />
            })}
            {/* Diamond shapes at cardinal points */}
            {[0, 90, 180, 270].map((deg) => {
              const a = (deg) * Math.PI / 180
              const d = 160
              const cx = 400 + d * Math.cos(a)
              const cy = 400 + d * Math.sin(a)
              return (
                <polygon
                  key={`d${deg}`}
                  points={`${cx},${cy - 20} ${cx + 12},${cy} ${cx},${cy + 20} ${cx - 12},${cy}`}
                />
              )
            })}
          </g>
        </svg>

        <div className="section-label">From Our Kitchen to Yours</div>
        <h1>Indian Recipes with Greek EVOO</h1>
        <p className="recipes-hero-sub">
          Discover how premium Cretan extra virgin olive oil transforms your favourite Indian dishes.
          From tadka to dessert, every recipe celebrates the Greek × Indian kitchen.
        </p>

        {/* Rangoli diamond separator */}
        <div className="recipes-hero-divider" aria-hidden="true">
          <span className="rangoli-line" />
          <span className="rangoli-diamond" />
          <span className="rangoli-dot" />
          <span className="rangoli-diamond" />
          <span className="rangoli-line" />
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────── */}
      <section className="recipes-content">
        {recipePosts.length > 0 ? (
          <>
            {/* Featured recipe — full-width horizontal */}
            {featuredRecipe && (
              <Link to={`/learn/${featuredRecipe.slug}`} className="recipe-featured">
                <span className="recipe-featured-watermark" aria-hidden="true">
                  {featuredRecipe.title.charAt(0)}
                </span>
                <div className="recipe-featured-left">
                  <div className="recipe-meta">
                    <span className="recipe-category-badge">Featured Recipe</span>
                    <span className="recipe-time">{featuredRecipe.readTime}</span>
                  </div>
                  <h2>{featuredRecipe.title}</h2>
                </div>
                <div className="recipe-featured-right">
                  <p>{featuredRecipe.excerpt}</p>
                  <span className="recipe-link">Read Recipe →</span>
                </div>
              </Link>
            )}

            {/* Remaining recipe cards */}
            {remainingRecipes.length > 0 && (
              <div className="recipes-grid">
                {remainingRecipes.map((post, index) => (
                  <Link to={`/learn/${post.slug}`} key={post.slug} className="recipe-card">
                    <span className="recipe-card-number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="recipe-card-inner">
                      <div className="recipe-meta">
                        <span className="recipe-time">{post.readTime}</span>
                      </div>
                      <h2>{post.title}</h2>
                      <p>{post.excerpt}</p>
                      <span className="recipe-link">Read Recipe →</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          /* ── Empty state ──────────────────────────────────── */
          <div className="recipes-empty">
            <svg className="recipes-empty-illustration" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Olive oil bottle illustration */}
              <defs>
                <linearGradient id="bottleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.08" />
                </linearGradient>
                <linearGradient id="oilGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {/* Bottle neck */}
              <rect x="85" y="30" width="30" height="50" rx="4" fill="url(#bottleGrad)" stroke="var(--saffron)" strokeWidth="1" strokeOpacity="0.3" />
              {/* Cap */}
              <rect x="82" y="18" width="36" height="16" rx="3" fill="none" stroke="var(--saffron)" strokeWidth="1" strokeOpacity="0.3" />
              {/* Bottle body */}
              <path d="M75,80 Q60,100 60,130 L60,270 Q60,290 80,290 L120,290 Q140,290 140,270 L140,130 Q140,100 125,80 Z" fill="url(#bottleGrad)" stroke="var(--saffron)" strokeWidth="1" strokeOpacity="0.3" />
              {/* Oil level */}
              <path d="M64,170 L136,170 L136,270 Q136,286 120,286 L80,286 Q64,286 64,270 Z" fill="url(#oilGrad)" />
              {/* Label area */}
              <rect x="70" y="190" width="60" height="60" rx="2" fill="none" stroke="var(--saffron)" strokeWidth="0.5" strokeOpacity="0.3" />
              {/* Label text lines */}
              <line x1="80" y1="210" x2="120" y2="210" stroke="var(--saffron)" strokeWidth="0.5" strokeOpacity="0.25" />
              <line x1="85" y1="220" x2="115" y2="220" stroke="var(--saffron)" strokeWidth="0.5" strokeOpacity="0.2" />
              <line x1="90" y1="230" x2="110" y2="230" stroke="var(--saffron)" strokeWidth="0.5" strokeOpacity="0.15" />
              {/* Olive branch */}
              <path d="M140,160 Q160,140 170,120" fill="none" stroke="var(--deep-olive)" strokeWidth="1.5" strokeOpacity="0.3" />
              <ellipse cx="158" cy="135" rx="8" ry="5" transform="rotate(-30 158 135)" fill="var(--deep-olive)" fillOpacity="0.15" stroke="var(--deep-olive)" strokeWidth="0.5" strokeOpacity="0.25" />
              <ellipse cx="168" cy="122" rx="7" ry="4.5" transform="rotate(-40 168 122)" fill="var(--deep-olive)" fillOpacity="0.15" stroke="var(--deep-olive)" strokeWidth="0.5" strokeOpacity="0.25" />
              {/* Droplet */}
              <path d="M100,300 Q100,310 105,312 Q110,310 110,300 Q105,295 100,300 Z" fill="var(--saffron)" fillOpacity="0.2" />
            </svg>
            <h3 className="recipes-empty-title">Recipes Are Simmering</h3>
            <p className="recipes-empty-text">
              Our chefs are perfecting Greek × Indian fusion recipes.<br />
              Join the waitlist to be the first to taste.
            </p>
            <div className="recipes-empty-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
          </div>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="recipes-cta">
        {/* Rangoli divider */}
        <div className="recipes-cta-divider" aria-hidden="true">
          <span className="rangoli-line" />
          <span className="rangoli-diamond" />
          <span className="rangoli-dot" />
          <span className="rangoli-diamond small" />
          <span className="rangoli-dot" />
          <span className="rangoli-diamond" />
          <span className="rangoli-line" />
        </div>

        <h2>Share Your Recipe</h2>
        <p>We'd love to hear how you use olive oil in your Indian kitchen.</p>
        <a href="mailto:hello@cretekos.com" className="recipes-cta-btn">Share Your Recipe</a>
      </section>
    </div>
  )
}
