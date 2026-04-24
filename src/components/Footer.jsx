import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <section className="du-newsletter">
        <div className="du-zigzag-top" style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: 0.7 }}></div>
        <div className="du-newsletter-inner">
          <div className="deva" style={{ fontFamily: 'Tiro Devanagari Sanskrit, serif', fontSize: 36, color: 'var(--saffron)', marginBottom: 20, lineHeight: 1 }}>✦</div>
          <h2>Letters from <em>Chania</em>.</h2>
          <div className="sub-deva deva">क्रेते से पत्र</div>
          <p>A quarterly dispatch from the grove — harvest notes, recipes, and the chance to reserve the next bottling before it's opened to anyone else.</p>
          <form className="du-nl-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="your@email.in" />
            <button type="submit">Subscribe →</button>
          </form>
        </div>
        <div className="du-zigzag-bottom" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.7 }}></div>
      </section>

      <footer className="du-foot">
        <div className="du-foot-top">
          <div>
            <div className="wordmark">Crete<span className="dot">k</span>os</div>
            <div className="wordmark-deva deva">क्रीटेकोस</div>
            <div className="tagline">A single grove in Chania, carefully bottled for the kitchens of India. One oil; two ancient ways of cooking.</div>
          </div>
          <div>
            <h4>The Oil</h4>
            <ul>
              <li><Link to="/oil">Harvest 2025</Link></li>
              <li><Link to="/oil">Tasting notes</Link></li>
              <li><Link to="/pairings">Pairings</Link></li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4>Our Story</h4>
            <ul>
              <li><Link to="/grove">The grove</Link></li>
              <li><Link to="/grove">The family</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/learn">Learn</Link></li>
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li>hello@cretekos.in</li>
              <li>Instagram</li>
              <li>WhatsApp +91</li>
              <li>Wholesale</li>
            </ul>
          </div>
        </div>
        <div className="du-foot-bottom">
          <div>© 2026 CreteKos · Crete to India</div>
          <div className="deva">क्रीटेकोस · शुद्ध · विश्वसनीय</div>
        </div>
      </footer>
    </>
  )
}
