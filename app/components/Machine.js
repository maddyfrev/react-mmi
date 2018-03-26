/**
 *
 * Machine.js
 *
 */
import React from 'react';

class Machine extends React.Component {
 
 constructor (props) {
   super(props)
   
   this.changer = this.changer.bind(this);
   this.state = {isActive: true};
 }
  changer() {
      //this.setState(prevState => ({isActive: !prevState.isActive}));
      if(this.isActive){
       
        this.setState({isActive: false});
        console.log(this.state);
     
      }else{
     

        this.setState({isActive: true});
        console.log(this.state);
     
      }
      this.forceUpdate();
    }
    
  render() {
    // Dans tous les cas, afficher
    return (
    <div 
      className= {this.props.isActive ? "machine active" : "machine"}>
      {this.props.name} 
      
      
       <button onClick = {this.changer}>
       aze
       </button>

    </div> 
    
      );

  }
  
    
    
  }


// Le composant sera accessible avec le nom "Machine"
export default Machine;
