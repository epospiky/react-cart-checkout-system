import React, { useState, useContext } from 'react';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import ItemsList from './components/ItemsList';
import {GlobalProvider} from './context/GlobalState';
import Cart from './components/Cart';
import Header from './components/Header';
// import Checkout from './components/Checkout';

function App() {     
  return (
   <GlobalProvider>
     <Router>
       <Header/>

       <Switch>
          <Route exact path="/">
            <ItemsList />
          </Route>
          <Route path ="/cart">
            <Cart/>
          </Route>
{/*           <Route path="/checkout">
              <Checkout/>
          </Route> */}
       </Switch>
     </Router>
    </GlobalProvider>
   
  );
}
export default App;