import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {Redirect, Route, Switch} from "wouter";
import Movies from "./routes/Movies.jsx";

export default function App() {
    return (
        <main className='App bg-zinc-900'>
            <Navbar />
            <Switch>
                <Route path={'/films/:sub*'} component={Movies} />
                <Route path="/">
                    <Redirect to="/films" />
                </Route>
                <Route component={Error} />
            </Switch>
            <Footer />
        </main>
    )
}
