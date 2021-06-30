import React from"react" ;
import './App.css';
import Header from "./Header" ;
import Home from "./Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login";

function App() { 
  return (
    <BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/">
      <Header/>
      <Home/>
      </Route>
      </Switch>


      <Switch>
    <Route path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      </Switch>

      <Switch>
    <Route path="/login">
      <Login/>
      </Route>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
