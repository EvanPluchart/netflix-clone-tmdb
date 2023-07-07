import React from 'react';
import reactLogo from '../assets/react.svg'
import netflixLogo from '../assets/netflix-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Link} from "wouter";

export default function Navbar() {
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
