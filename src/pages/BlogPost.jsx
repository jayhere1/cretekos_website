import { useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug, posts } from '../content/posts'
import './BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  // Related posts: same category first, then fill with random others (max 3)
  const relatedPosts = useMemo(() => {
    if (!post) return []
    const others = posts.filter((p) => p.slug !== post.slug)
    const sameCategory = others.filter((p) => p.category === post.category)
    const different = others.filter((p) => p.category !== post.category)

    // Shuffle the different-category posts for variety
    const shuffled = [...different].sort(() => Math.random() - 0.5)

    const result = [...sameCategory, ...shuffled]
    return result.slice(0, 3)
  }, [post, slug])

  // 404 state
  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="article-not-found">
          <Link to="/learn" className="back-link">
            &larr; Back to Learn
          </Link>
          <h1>Article Not Found</h1>
          <p>
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Link to="/learn" className="back-to-learn-btn">
            Browse All Articles
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      {/* Back link */}
      <div className="article-back">
        <Link to="/learn" className="back-link">
          &larr; Back to Learn
        </Link>
      </div>

      {/* Header */}
      <header className="article-header">
        <div className="article-meta">
          <span className="article-category-badge">{post.categoryLabel}</span>
          <span className="article-meta-separator">&middot;</span>
          <span className="article-date">{post.date}</span>
          <span className="article-meta-separator">&middot;</span>
          <span className="article-read-time">{post.readTime}</span>
        </div>
        <h1 className="article-title">{post.title}</h1>
      </header>

      {/* Article body */}
      <article
        className="article-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="related-posts-divider" />
          <h2 className="related-posts-heading">More Articles</h2>
          <div className="related-posts-grid">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/learn/${related.slug}`}
                className="related-post-card"
              >
                <span className="related-post-category">
                  {related.categoryLabel}
                </span>
                <h3 className="related-post-title">{related.title}</h3>
                <p className="related-post-excerpt">{related.excerpt}</p>
                <span className="related-post-meta">
                  {related.date} &middot; {related.readTime}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default BlogPost
