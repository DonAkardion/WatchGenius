import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Charts from "./components/Charts";
import Agent from "./components/Agent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Charts />
      <Agent />
      <Footer />
    </div>
  );
}

export default App;
