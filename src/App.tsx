import React, {useState} from 'react';
import Home from "./components/Home";
import Games from "./components/Games";
import Header from "./components/Header";
import Product from "./components/Product";
import SignupOrLogin from "./components/SignupOrLogin";
import './style/style.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {

    const isLogin: boolean = false;
    const [info, setInfo] = useState("");

    console.log(info);

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() =>
                    <>
                        <Header info={info}/>
                        <Home />
                    </>
                }/>
                <Route path="/games" render={() =>
                    <>
                        <Header info={info}/>
                        <Games />
                    </>
                }/>
                <Route path="/signupOrLogin" render={() =>
                    <>
                        <Header info={info}/>
                        <SignupOrLogin isLogin={isLogin} info={info} setInfo={setInfo}/>
                    </>
                }/>

                <Route path="/:productName" render={() =>
                    <>
                        <Header info={info}/>
                        <Product />
                    </>
                }/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
