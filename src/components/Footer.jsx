import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-black px-6 md:px-72 py-6 flex-col items-center justify-between space-y-6">
            <div className="flex items-center space-x-6">
                <FontAwesomeIcon
                    className='h-6 w-6 text-white hover:text-gray-300 cursor-pointer'
                    icon={faFacebook}
                />
                <FontAwesomeIcon
                    className='h-6 w-6 text-white hover:text-gray-300 cursor-pointer'
                    icon={faInstagram}
                />
                <FontAwesomeIcon
                    className='h-6 w-6 text-white hover:text-gray-300 cursor-pointer'
                    icon={faTwitter}
                />
                <FontAwesomeIcon
                    className='h-6 w-6 text-white hover:text-gray-300 cursor-pointer'
                    icon={faYoutube}
                />
            </div>

            <div className="text-gray-400 text-xs flex items-center space-x-32">
                <ul className="flex-col space-y-3">
                    <li>Audiodescription</li>
                    <li>Relations investisseurs</li>
                    <li>Confidentialité</li>
                    <li>Nous contacter</li>
                </ul>

                <ul className="flex-col space-y-3">
                    <li>Centre d'aide</li>
                    <li>Recrutement</li>
                    <li>Informations légales</li>
                </ul>

                <ul className="flex-col space-y-3">
                    <li>Cartes cadeaux</li>
                    <li>Boutique Netflix</li>
                    <li>Préférences de cookies</li>
                </ul>

                <ul className="flex-col space-y-3">
                    <li>Presse</li>
                    <li>Conditions d'utilisation</li>
                    <li>Mentions légales</li>
                </ul>
            </div>

            <div>
                <p className="text-gray-400 text-xs">© 1997-2021 Netflix, Inc.</p>
            </div>
        </footer>
    );
}
