import React from 'react';
import reactLogo from '../assets/react.svg'
import netflixLogo from '../assets/netflix-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <nav className="bg-zinc-900 px-6 md:px-14 py-6 flex items-center justify-between">

            <div className={'flex space-x-12 items-center'}>
                <div className="flex items-center">
                    <img src={netflixLogo} alt="Netflix logo" className="h-8" />
                </div>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Séries
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Films
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex items-center space-x-6">
                <FontAwesomeIcon
                    className='h-6 w-6 text-white hover:text-gray-300 cursor-pointer'
                    icon={faMagnifyingGlass}
                />

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
        </nav>
    );
}
