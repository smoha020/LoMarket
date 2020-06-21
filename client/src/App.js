import React, { Components} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ShoppingCart from './Components/ShoppingCart.js'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Description from './Components/Description';
import Footer from './Components/Footer'
import ProdNav from './Components/ProdNav'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY)

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Nav />
          <div className="App">
            <Route exact path='/' component={Home}/>   
            <Route path='/ProdNav/:num' component={ProdNav}/> 
            <Route path='/Cart' component={ShoppingCart}/> 
            <Route path='/Description/:id' component={Description}/> 
          </div>
        <Footer />
      </Router>
    </Elements>
  );
}

export default App;
