import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import { auth } from "./config/firebaseServices";
import { SET_USER } from "./consts";
import { useStateValue } from "./provider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51KGj9rEQarNbL3ecttx8hKWOQtPLCRlYpsPYlsY6MrlNswyUw82c2yzSF9OYPt5MJv7AdXIHRKEcHlwPpYpp1XSU006NK5hH1F"
);
const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // this will run only once when component loads
    auth.onAuthStateChanged((authUser) => {
      //console.log("user", authUser);
      if (authUser) {
        // user is logged in
        dispatch({
          type: SET_USER,
          user: authUser,
        });
        console.log("dispatched");
      } else {
        //user is logged out
        dispatch({
          type: SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
