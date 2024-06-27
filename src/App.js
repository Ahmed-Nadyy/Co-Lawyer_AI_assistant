import React from 'react';
import "./App.css";
import { Blog, Features, Footer, Header, WhatGPT3 } from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
