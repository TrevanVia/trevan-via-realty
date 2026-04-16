import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HomeValue from './pages/HomeValue'
import Properties from './pages/Properties'
import AreaGuide from './pages/AreaGuide'
import AreasIndex from './pages/AreasIndex'
import About from './pages/About'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home-value" element={<HomeValue />} />
          <Route path="properties" element={<Properties />} />
          <Route path="areas" element={<AreasIndex />} />
          <Route path="areas/:slug" element={<AreaGuide />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
