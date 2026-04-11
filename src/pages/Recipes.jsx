import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPostsByCategory } from '../content/posts'
import './Recipes.css'

export default function Recipes() {
  const recipePosts = getPostsByCategory('recipes')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="recipes-page">
      <section className="recipes-hero">
        <div className="section-label">From Our Kitchen to Yours</div>
        <h1>Indian Recipes with Greek EVOO</h1>
        <p className="recipes-hero-sub">
          Discover how premium Cretan extra virgin olive oil transforms your favourite Indian dishes.
          From tadka to dessert, every recipe celebrates the Greek × Indian kitchen.
        </p>
      </section>

      <section className="recipes-content">
        {recipePosts.length > 0 ? (
          <div className="recipes-grid">
            {recipePosts.map(post => (
              <Link to={`/learn/${post.slug}`} key={post.slug} className="recipe-card">
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
        ) : (
          <div className="recipes-empty">
            <p>Recipes coming soon. Join the waitlist to be the first to know.</p>
          </div>
        )}
      </section>

      <section className="recipes-cta">
        <h2>Have a Recipe Idea?</h2>
        <p>We'd love to hear how you use olive oil in your Indian kitchen.</p>
        <a href="mailto:hello@cretekos.com" className="recipes-cta-btn">Share Your Recipe</a>
      </section>
    </div>
  )
}
