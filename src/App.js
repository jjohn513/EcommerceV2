import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import Productlist from './components/productlist'
import Details from './components/details'
import Cart from './components/cart/cart'
import Default from './components/default'
import Model from './components/model'
import Home from './components/home'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/store" component={Productlist}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Default}/>
        </Switch>
        <Model/>
      </React.Fragment>
    );
  }
  
}

export default App;
