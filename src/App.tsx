import React, {useState} from 'react';
import Home from "./components/Home";
import Games from "./components/Games";
import Header from "./components/Header";
import Product from "./components/Product";
import SignupOrLogin from "./components/SignupOrLogin";
import './style/style.scss';
import {Route, Switch} from "react-router-dom";
import Orders from "./components/Orders";


function App() {

    const isLogin: boolean = false;
    const [info, setInfo] = useState("");
    let order: { name: any; }[] = [];

  return (
    <div className="App">
        <Header info={info}/>
            <Switch>
                <Route exact path="/" render={() =>
                    <>
                        <Home />
                    </>
                }/>
                <Route path="/games" render={() =>
                    <>
                        <Games />
                    </>
                }/>
                <Route path="/signupOrLogin" render={() =>
                    <>
                        <SignupOrLogin isLogin={isLogin} setInfo={setInfo}/>
                    </>
                }/>
                <Route path="/orders" render={() =>
                    <>
                        <Orders info={info} order={order}/>
                    </>
                }/>
                <Route path="/:productName" render={() =>
                    <>
                        <Product info={info} order={order}/>
                    </>
                }/>
            </Switch>
    </div>
  );
}

export default App;
