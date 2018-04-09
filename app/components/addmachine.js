import React from 'react';

var App = React.createClass({
  getInitialState : function() {
    return (
      {
        machine: {
         {this.props.name
        }
      }
     )
    },
    addMachine : function(machine) {
     //create a unike key for each new machine item
     var timestamp = (new Date()).getTime();
     // update the state object
     this.state.machine['machine-' + timestamp ] = machine;
     // set the state
     this.setState({ machines : this.state.machines });
    },
    render: function() {
      return (
        <div className="component-wrapper">
          <machineList machines={this.state.machines} />
          <AddmachineForm addmachine={this.addmachine} />
        </div>
      );
     }
    });

    var machineList = React.createClass({
      render : function() {
        return (
          <div className="container">
            <ul className="list-group text-center">
              {
                Object.keys(this.props.machines).map(function(key) {
                  return <li className="list-group-item list-group-item-info">{this.props.machines[key]}</li>
                }.bind(this))
              }
            </ul>
           </div>
         );
       }
     });

    var AddmachineForm = React.createClass({
      createmachine : function(e) {
        e.preventDefault();
        //get the machine object name from the form
        var machine = this.refs.machineName.value;
        //if we have a value
        //call the addmachine method of the App component
        //to change the state of the machine list by adding an new item
        if(typeof machine === 'string' && machine.length > 0) {
          this.props.addmachine(machine);
          //reset the form
          this.refs.machineForm.reset();
        }
       },
       render : function() {
        return(
          <form className="form-inline" ref="machineForm" onSubmit={this.createmachine}>
          <div className="form-group">
            <label for="machineItem">
              machine Name
              <input type="text" id="machineItem" placeholder="machine à chocolat" ref="machineName" className="form-control" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Add machine</button>
         </form>
        )
       }
      });

      React.render(
        <App />,
        document.getElementById('app')
      );