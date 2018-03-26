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

/*export default function App() {
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
}*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    machines:[
          {
               id: 0,         
               name: "Machine à Café",
               isActive: true
             },
             
          { 
            id: 1, 
            name: "Machine à Thé",
               isActive: false
             },
             
          { 
            id: 2, 
            name: "Machine à Cappuccino",
               isActive: true
             },
             
        { 
            id: 3, 
            name: "Machine à Soda",
               isActive: false
             },
        ]
      };
      console.log(this.state);
     }
    render(){
      return(
         <div>
    <Header/>
    { this.state.machines.map(machine =>
                  //console.log(machine.name))}
         <Machine name= {machine.name}
         key={machine.id}
         isActive={machine.isActive}/>
    )}
  
  {  //<Machine name={this.state.machines[0].name} isActive={this.state.machines[0].isActive}/>
    //<Machine name={this.state.machines[1].name} isActive={this.state.machines[1].isActive}/>
   // <Machine name={this.state.machines[2].name} isActive={this.state.machines[2].isActive}/>
   // <Machine name={this.state.machines[3].name} isActive={this.state.machines[3].isActive}/> 
   }
    <Footer/>
    </div>
  );
}
}
export default App;  