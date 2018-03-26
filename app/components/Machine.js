/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
   handleClick() { console.log('Hello')}
   render() {
  // Dans tous les cas, afficher
      return (
    <div 
    className={this.props.isActive ? "machine active" : "machine"}>
    <h2> {this.props.name} </h2>
     <button onClick={this.handleClick} type="button" className="btn">
     Toggle
    </button>
      
    </div>
    )
  }
}
// Le composant sera accessible avec le nom "Machine"
export default Machine;