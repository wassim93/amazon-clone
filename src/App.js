import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
