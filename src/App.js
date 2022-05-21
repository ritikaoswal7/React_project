import React, { useEffect, useState } from "react";
import "./Static/App.css";
import Home from "./Components/Home";
import SplashScreen from "./Components/SplashScreen";
import OTP from "./Components/OTP";
import RegisterForm from "./Components/demo.js";
import SelfStudy from "./Components/SelfStudy.js";
import Community from "./Components/Community.js";
import Me from "./Components/Me.js";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="App">
      <Outlet />
    </div>
  );
}

export default App;
