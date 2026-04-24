import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Grove from './pages/Grove'
import Oil from './pages/Oil'
import Pairings from './pages/Pairings'
import Journal from './pages/Journal'
import Learn from './pages/Learn'
import BlogPost from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="du-announce">
        <span className="mark">&#9670;</span>&nbsp; Harvest 2025 is bottling &middot; Founding 400 shipped in February &nbsp;<span className="mark">&#9670;</span>&nbsp; <span className="deva">&#x0939;&#x093E;&#x0930;&#x094D;&#x0935;&#x0947;&#x0938;&#x094D;&#x091F; &#x0968;&#x0966;&#x0968;&#x096B;</span>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grove" element={<Grove />} />
        <Route path="/oil" element={<Oil />} />
        <Route path="/pairings" element={<Pairings />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
