import React, {useState} from 'react';
import reactLogo from '../assets/react.svg'
import netflixLogo from '../assets/netflix-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Link, Redirect, useLocation} from "wouter";

export default function Navbar() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useLocation();

    const handleSearchClick = () => {
        setSearchVisible(true);
    };

    const handleSearchSubmit = () => {
        setLocation('/recherche/' + searchQuery)
    };

    return (
        <nav className="z-50 bg-zinc-900 px-6 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 w-full">

            <div className={'flex space-x-12 items-center justify-between w-full'}>
                <div className={'flex space-x-12 items-center'}>
                    <Link className="flex items-center" href={'/'}>
                        <img src={netflixLogo} alt="Netflix logo" className="h-8 cursor-pointer" />
                    </Link>

                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <Link href="/" className="text-white hover:text-gray-300">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link href="/series" className="text-white hover:text-gray-300">
                                Séries
                            </Link>
                        </li>
                        <li>
                            <Link href="/films" className="text-white hover:text-gray-300">
                                Films
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-6">
                    {searchVisible ? (
                        <form onSubmit={handleSearchSubmit} className="flex items-center gap-4">
                            <input
                                type="text"
                                placeholder="Rechercher un film"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="py-2 px-4 rounded bg-gray-200 text-gray-800 focus:outline-none"
                            />
                            <button type="submit" className="text-white hover:text-gray-300">
                                Rechercher
                            </button>
                        </form>
                    ) : (
                        <FontAwesomeIcon
                            className='h-6 w-6 text-white hover:text-gray-300 cursor-pointer'
                            icon={faMagnifyingGlass}
                            onClick={handleSearchClick}
                        />
                    )}

                    <FontAwesomeIcon
                        className='h-6 w-6 text-white hover:text-gray-300 cursor-pointer'
                        icon={faBell}
                    />

                    <img
                        src={reactLogo}
                        alt="Profile"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                </div>
            </div>


            <ul className="md:hidden flex space-x-6">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/series" className="text-white hover:text-gray-300">
                        Séries
                    </Link>
                </li>
                <li>
                    <Link href="/films" className="text-white hover:text-gray-300">
                        Films
                    </Link>
                </li>
            </ul>

        </nav>
    );
}
