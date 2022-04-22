import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Producto } from './components/Products'
import { Detailsproducts } from './components/DetailsProducts'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Detailsproducts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
