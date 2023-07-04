import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MovieList from "./components/MovieList.jsx";

export default function App() {
    return (
        <main className='bg-zinc-900'>
            <Navbar />
            <MovieList />
            <Footer />
        </main>
    )
}
