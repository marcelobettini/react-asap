import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import About from './pages/About.tsx'
import Recipes from './pages/Recipes.tsx'
import Home from './pages/Home.tsx'
import RecipeDetail from './pages/RecipeDetail.tsx'
import RootLayout from './pages/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={<RootLayout />}
        >
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/recipes'
            element={<Recipes />}
          />
          <Route
            path='/recipes/:id'
            element={<RecipeDetail />}
          />
          <Route
            path='*'
            element={<h1>Ocurrió un error</h1>} />
        </Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
