import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {Route, Switch} from "wouter";
import Movies from "./routes/Movies.jsx";
import Error from "./components/Error.jsx";
import Castings from "./routes/Castings.jsx";
import Tvshows from "./routes/Tvshows.jsx";
import React from "react";
import Search from "./routes/Search.jsx";
import Home from "./components/Home.jsx";

export default function App() {
    return (
        <main className='App bg-zinc-900'>
            <Navbar />
            <Switch>
                <Route path={'/films/:sub*'} component={Movies} />
                <Route path={'/series/:sub*'} component={Tvshows} />
                <Route path={'/casting/:sub*'} component={Castings} />
                <Route path={'/recherche/:sub*'} component={Search} />
                <Route path="/">
                    <Home />
                </Route>
                <Route component={Error} />
            </Switch>
            <Footer />
        </main>
    )
}
