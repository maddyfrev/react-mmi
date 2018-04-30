import React from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Machine from '../../components/Machine.js';
import AddmachineForm from '../../components/addmachine.js';
import Toggle from 'react-toggle'
import '../../css/style.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class App extends React.Component {
  
  constructor(props) {
    super(props); //super(props) permet d'avoir accès au props

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = {
        center: {
       lat: 48.8566,
        lng: 2.3522
      },
    addmachine : function(machine) {
     //create a unike key for each new machine item
     var timestamp = (new Date()).getTime();
     // update the state object
     this.state.machines['machine-' + timestamp ] = machine;
     // set the state
     this.setState({ machines : this.state.machines });
    },
      zoom: 11,
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
            name: "Tireuse à bière"
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
    machines[key].isActive = !machines[key].isActive;
            <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBU_IEeDtk0fIKfm18yj8bD6DDaJ0N-3e4" }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
              >
                <AnyReactComponent
                  lat={this.state.center.lat}
                  lng={this.state.center.lng}
                />
              </GoogleMapReact>
            </div>
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
        // Calcul des compteurs
    const machinesIds = Object.keys(this.state.machines);
    const totalActive = machinesIds.reduce((prevTotal, key) => {
      const machine = this.state.machines[key];
      const isAvailable = machine && machine.isActive;
      // On incrémente le compteur à chaque fois que l'on trouve une machine active
      return isAvailable ? prevTotal + 1 : prevTotal
    }, 0);
    const total = machinesIds.length;

     return(
         
    <div className="main">

    <Header/>
    
    
    
 {/*Conteneur de notre liste*/}
          {/*Compteurs*/}
          <div className="counter">
            <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
         </div>
<div className="machines-list" >
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
//quand on indique "props", on appelle une valeur qui vient généralement d'autre part. (un autre fichier, un truc parent...)
//quand on indique "state", c'est pour changer une valeur en local. d'où l'importante d'indiquer state dans le div et le button de ce component.
//et de définir ce qu'il y a dans le state (ligne 12)
// Le composant sera accessible avec le nom "ThisMachine"
export default App;