import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomeScreen from "./screens/Home/HomeScreen";
import ProductScreen from "./screens/Product/ProductScreen";
import CartScreen from "./screens/Cart/CartScreen";

import Navbar from "./components/Navbar/NavBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
      <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
