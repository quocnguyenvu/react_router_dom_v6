import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import Products from './pages/Products'

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />}>
      </Route>
      <Route path='/admin' element={<Dashboard />} >
        <Route path='products' element={<Products />} />
      </Route>   
    </Routes>
  )
}

export default App
