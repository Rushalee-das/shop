import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategories from './pages/ShopCategories';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSingup from './pages/LoginSingup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategories category="men"/>} />
          <Route path='/women' element={<ShopCategories category="women"/>} />
          <Route path='/kids' element={<ShopCategories category="kids"/>} />
          <Route path='/product' element={<Product/>} />
          <Route path=':productId' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSingup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
