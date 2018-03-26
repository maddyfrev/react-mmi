/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import '../../css/style.css';
// On peut aussi importer du CSS de la meme facon.

export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
   <div>
    <Header/>
    <Machine name="Machine 1" />
    <Machine name="Machine 2"/>
    <Machine name="Machine 3" />
    <Machine name="Machine 4"/>
    <Footer/>
    </div>
  );
}
