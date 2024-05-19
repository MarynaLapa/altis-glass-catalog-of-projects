import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Catalog from './page/Catalog/Catalog'
import Project from './page/Project/Project'
import './App.css'

function App() {

  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path="/:projectId" element={<Project />}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
