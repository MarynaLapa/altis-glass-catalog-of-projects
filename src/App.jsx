import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Catalog from './page/Catalog/Catalog'
import './App.css'

function App() {

  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog />}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
