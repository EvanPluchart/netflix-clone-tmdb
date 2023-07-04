import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Switch } from "wouter";
import Movies from "./routes/Movies.jsx";
import Error from "./components/Error.jsx";

export default function App() {
    return (
        <main className='App bg-zinc-900'>
            <Navbar />
            <Switch>
                <Route path={'/films/:sub*'} component={Movies} />
                <Route path="/">
                    <h1>Accueil</h1>
                </Route>
                <Route component={Error} />
            </Switch>
            <Footer />
        </main>
    )
}
