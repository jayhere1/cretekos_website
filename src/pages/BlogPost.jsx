import { useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug, posts } from '../content/posts'
import './BlogPost.css'

function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [slug])

  const related = useMemo(() => {
    if (!post) return []
    const others = posts.filter(p => p.slug !== post.slug)
    const same = others.filter(p => p.category === post.category)
    const diff = others.filter(p => p.category !== post.category).sort(() => Math.random() - 0.5)
    return [...same, ...diff].slice(0, 3)
  }, [post, slug])

  if (!post) {
    return (
      <div className="bp-not-found">
        <Link to="/learn" className="bp-back">← Back to Learn</Link>
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist or may have been moved.</p>
        <Link to="/learn"><button className="du-btn-ghost">Browse All Articles</button></Link>
      </div>
    )
  }

  return (
    <>
      <div className="bp-back-bar">
        <Link to="/learn" className="bp-back">← Back to Learn</Link>
      </div>

      <header className="bp-header">
        <div className="bp-meta">
          <span className="bp-cat-badge">{post.categoryLabel}</span>
          <span className="bp-sep">·</span>
          <span>{formatDate(post.date)}</span>
          <span className="bp-sep">·</span>
          <span>{post.readTime}</span>
        </div>
        <h1>{post.title}</h1>
        <div className="bp-author">By {post.author}</div>
      </header>

      <article className="bp-body" dangerouslySetInnerHTML={{ __html: post.content }} />

      {related.length > 0 && (
        <section className="bp-related">
          <div className="bp-related-divider"></div>
          <h2>More Articles</h2>
          <div className="bp-related-grid">
            {related.map(r => (
              <Link key={r.slug} to={`/learn/${r.slug}`} className="bp-related-card">
                <span className="bp-related-cat">{r.categoryLabel}</span>
                <h3>{r.title}</h3>
                <p>{r.excerpt}</p>
                <span className="bp-related-meta">{formatDate(r.date)} · {r.readTime}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
