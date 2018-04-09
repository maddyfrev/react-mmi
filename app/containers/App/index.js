/**
 *
 * App.js
 *
 */
/* 

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
/*
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

  */
  
  /**
 *
 * App.js
 *
 */
import React from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Machine from '../../components/Machine.js';
import '../../css/style.css';


class App extends React.Component {
  
  constructor(props) {
    super(props); //super(props) permet d'avoir accès au props
   
   
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = {
    machines:[
          {               
            id: 0,   
            isActive: true,
            name: "Machine à soda"
             },
             
          {               
            id: 1, 
            isActive: false,
            name: "Machine à café"
             },
             
          {         
            id: 2, 
            isActive: false,
            name: "Machine à cappucino"
             },
             
        {            
            id: 3, 
            isActive: true,
            name: "Machine à thé"
             }
        ]
};
}

   // Méthode pour activer une machine
  handleStatusChange(key) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On modifie le status de CETTE machine
    machines[key].isActive = true;
    // Pour vérifier la nouvelle collection dans la console :
    console.log({ machines });

    // 3. On applique cette nouvelle collection au state
    this.setState({ machines });
  }

  
/*
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


        handleClick() {
    this.setState(prevState => (
        {isMachineOn: !prevState.isMachineOn}
        ));
    }
    */

  
  
 
  
    render(){ 

     return(
         
    <div className="main">

    <Header/>
    <div className="machines-list">
    {/*Boucle sur notre collection de machines*/}
            {
              Object
                .keys(this.state.machines)
                .map(key =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={this.state.machines[key].name}
                         key={this.state.machines[key].id}
                         index={this.state.machines[key].id}
                         handleStatusChange={this.handleStatusChange}
                         isActive={this.state.machines[key].isActive}/>
              )}
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

   /* <button onClick={this.handleClick}>
     {this.state.isMachineOn ? 'ON' : 'OFF'}
    </button>
    { this.state.machines.map(machine =>
                  //console.log(machine.name))}
    
        <Machine name= {machine.name}
                key={machine.id}
         isMachineOn={machine.isMachineOn}
        />
        
    )}
    
    <Footer/>
    </div>
    
  );
}
}
//quand on indique "props", on appelle une valeur qui vient généralement d'autre part. (un autre fichier, un truc parent...)
//quand on indique "state", c'est pour changer une valeur en local. d'où l'importante d'indiquer state dans le div et le button de ce component.
//et de définir ce qu'il y a dans le state (ligne 12)
// Le composant sera accessible avec le nom "ThisMachine"
export default app;*/