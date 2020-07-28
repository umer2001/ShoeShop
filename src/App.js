import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {CartProvider} from './Cartcontext';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Product from './Components/Product';
import Cart from './Components/Cart';
import './App.css';

function App() {
  const [productCount, setProductCount] = useState(0);
  return (
    <CartProvider>
      <Router>
      <div className="App">
        <Navbar  productCount={productCount} />
        <Switch>
          <Route path="/" exact component={ () => <Home count={productCount} onClick={ (count) => setProductCount(count) } />} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" render={(props) => <Product count={productCount} onClick={ (count) => setProductCount(count) } {...props}/>} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;