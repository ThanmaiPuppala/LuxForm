
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './Components/Nav/Bar';
import Index from './Components/Pages/Index';
import Carts from './Components/Pages/Carts';
import About from './Components/Pages/About';
import Wishlist from './Components/Pages/Wishlist';
import Shop from './Components/Pages/Shop';
import Contact from "./Components/Pages/Contact";
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <Router>
      <Bar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/wish" element={<Wishlist/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
