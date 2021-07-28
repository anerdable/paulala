import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </BrowserRouter>
      {/* <div className="App-header">
        <Header />
      </div>
      <div className="Main-content">
        <MainContent />
      </div>
      <div className="App-footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
