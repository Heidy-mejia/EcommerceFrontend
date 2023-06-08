
import { ProductList } from './components/pants/Pants'
import { ProductListShirts } from './components/shirts/Shirts'
import { ProductListShoes } from './components/shoes/Shoes'
import { Dresses } from './components/dresses/Dresses'
import { Route, Routes } from 'react-router-dom'
import { ShoesPage } from './pages/ShoesPage'
import { Home } from './pages/Home'
import { DressesPage } from './pages/DressesPage'
import { PantsPage } from './pages/PantsPage'
import { ShirtsPage } from './pages/ShirtsPage'
import { Header } from './components/header/Header'
import { Skirts } from './components/Skirts/Skirts'
import { Skirtspage } from './pages/Skirtspage'


function App() {

  return (
    <>
      {/* <ProductList/>
    <ProductListShirts/>
    <ProductListShoes/>
    <Dresses /> */}
    

    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zapatos" element={<ShoesPage />} />
        <Route path="/vestidos" element={<DressesPage />} />
        <Route path="/pantalones" element={<PantsPage />} />
        <Route path="/camisas" element={<ShirtsPage />} />
        <Route path="/faldas" element={<Skirtspage/>} />
    </Routes>
    </>
  )
}

export default App
