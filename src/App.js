import React from "react";
import "./App.css";
import AppApi from "./components/AppApi";
import NavBar from "./components/NavBar";
import Header from "./components/Header";


function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AppApi />
    </div>
  );
}

export default App;
