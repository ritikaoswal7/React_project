import React from "react";
import ReactDOM from "react-dom";
import "./Static/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SplashScreen from "./Components/SplashScreen";
import OTP from "./Components/OTP";
import RegisterForm from "./Components/demo.js";
import SelfStudy from "./Components/SelfStudy.js";
import Community from "./Components/Community.js";
import Me from "./Components/Me.js";
import ProtectedRoute from "./ProtectedRoute.js";
import PublicRoute from "./PublicRoute.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/demo" element={<RegisterForm />} />
        <Route path="/OTP" element={<OTP />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/SelfStudy" element={<SelfStudy />} />
          <Route path="/Me" element={<Me />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
