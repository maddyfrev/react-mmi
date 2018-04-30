import React from 'react';
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
              <input type="text" id="machineItem" placeholder="e.x.lemmon" ref="machineName" className="form-control" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Add machine</button>
         </form>
        )
       }
      });
      export default AddmachineForm;
