import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct';
import UpdateProduct from './components/UpdateProduct';
import About from './components/About';
import Inventory from './components/Inventory'; // Import the Inventory component

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router> {/* Ensure Router wraps the entire application */}
      <div className="App">
        <Navbar title="ShopDesk" about="About" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Inventory />} /> {/* Add Inventory route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
