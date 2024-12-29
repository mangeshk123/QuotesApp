import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="category/:category" element={<CategoryPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
