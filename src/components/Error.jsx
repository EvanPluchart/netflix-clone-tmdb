import React from "react";
import { Link } from "wouter";

export default function Error() {
    return (
        <div>
            <h1>Erreur 404 : Page non trouvée</h1>
            <p>Désolé, la page que vous recherchez n'a pas été trouvée.</p>
            <Link href="/">Retour à l'accueil</Link>
        </div>
    );
}
