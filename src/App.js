import React from "react";
import "./App.css";
import PicOfDay from "./Components/PicOfDay";
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <PicOfDay />
     <Footer />
    </div>
  );
}

export default App;
