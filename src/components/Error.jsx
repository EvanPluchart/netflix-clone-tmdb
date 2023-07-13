import React from "react";
import { Link } from "wouter";

export default function Error() {
    return (
        <div className={'flex flex-col justify-center items-center text-center min-h-[100vh]'}>
            <h1 className={'font-bold text-white text-4xl md:text-6xl mb-10'}>Erreur 404 : Page non trouvée</h1>
            <p className={'font-bold text-white text-2xl'}>Désolé, la page que vous recherchez n'a pas été trouvée.</p>
            <Link
                href="/"
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded my-5`}
            >Retour à l'accueil</Link>
        </div>
    );
}
