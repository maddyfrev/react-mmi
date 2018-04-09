
/**
 *
 * Machine.js
 *
 */
 /*
import React from 'react';

class Machine extends React.Component {
   handleClick() { console.log("coucou")}
   render() {
  // Dans tous les cas, afficher
  //this.props.isActive? "machine" : "machine active"
  //y'a du potentiel
      return (
    <div 
    className={this.props.isActive ? "machine active" : "machine"}>
    <h2> {this.props.name} </h2>
     <button onClick={(e) => this.handleClick(e)} type="button" className="btn">
     Toggle
    </button>
      
    </div>
    )
  }
}
// Le composant sera accessible avec le nom "Machine"
export default Machine;
*/

/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {

    

  
  render() {

    // Dans tous les cas, afficher
    return ( 
    <div 
    className={this.props.isMachineOn ? "machine active" : "machine"}>
    <h2>{this.props.name}</h2>
    <button onClick={this.props.handleClick}>
        {this.props.isMachineOn ? 'ON' : 'OFF'}
    </button>
    
    </div>
    
    )
  }
}


//explication de la ligne 12: "?" est équivalent à un "if" et ":" est équivalent à un "else"
//ligne 12: si isActive n'est pas vide dans inedx.js, la div a comme classe "machine-active", sinon elle a comme classe "machine-desactivee"

//ligne 15: <button onClick = {changeClass}>Changer la classe</button>

//dans index.js:
/*  <Machine title = "1" abcde = "Premiere machine" isActive = "Yes" />
    <Machine title = "2" abcde = "Deuxieme machine" isActive = "No"/>
    <Machine title = "3" abcde = "Troisieme machine" isActive = ""/>
*/

// Le composant sera accessible avec le nom "Machine"
export default Machine;