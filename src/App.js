import React from 'react';
import { Navbar } from "./components"
import { WatchStoreComponent } from './containers';
import { Footer } from "./containers"
import "./App.css";

const App = () => {
    return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <WatchStoreComponent />
          <Footer />
        </div>
      </div>
    );
  };

export default App;
