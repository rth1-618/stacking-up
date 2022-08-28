import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Product from "./components/Product";
import LoginForm from "./components/form/LoginForm";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Toggle from "./components/Navbar/Toggle";
import SideMenu from "./components/Navbar/SideMenu";
import Id from "./components/Id";

function App() {
  const [navToggled, setNavToggled] = useState(false);
  const alterToggle = () => {
    setNavToggled(!navToggled);
  };
  return (
    <Router>
      {/* <Toggle /> */}
      <Navbar alterToggle={alterToggle} />
      {navToggled ? <SideMenu alterToggle={alterToggle} /> : null}
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/signin" exact element={<LoginForm />} />
        <Route path="/signup" exact element={<SignUp />} />
      </Switch>
      <Id />
    </Router>
  );
}

export default App;
