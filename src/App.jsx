import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
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
      <ScrollToTop />
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
