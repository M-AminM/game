import React from 'react';
import Home from "./components/Home";
import Games from "./components/Games";
import './style/style.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/games" component={Games}/>
                <Route path="/:productName" component={Product}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
