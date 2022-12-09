import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk } from '../../store/thunks';


class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          Description: "", 
          PriorityLevel: "",
          CompletionStatus: "",
          EmployeeID: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting Task ID from url
        this.props.fetchTask(this.props.match.params.id);
        this.setState({
            Description: this.props.Task.Description, 
            PriorityLevel: this.props.Task.PriorityLevel,
            CompletionStatus: this.props.Task.CompletionStatus,
            EmployeeID: this.props.Task.EmployeeID, 
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for Task from form input
        let Task = {
            id: this.props.Task.id,
            Description: this.state.Description,
            PriorityLevel: this.state.PriorityLevel,
            CompletionStatus: this.state.CompletionStatus,
            EmployeeID: this.state.EmployeeID
        };
        
        this.props.editTask(Task);

        this.setState({
          redirect: true, 
          redirectId: this.props.Task.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single Task view of the edited Task
        if(this.state.redirect) {
          return (<Redirect to={`/Task/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input type="text" name="Description" value={this.state.Description} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
            <input type="text" name="Priority Level" value={this.state.PriorityLevel} onChange={(e) => this.handleChange(e)}/>
            <br/>
            
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Completion Status: </label>
            <input type="text" name="Completion Status" value={this.state.CompletionStatus} onChange={(e) => this.handleChange(e)} />
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>EmployeeID: </label>
            <input type="text" name="EmployeeID" value={this.state.EmployeeID} onChange={(e) => this.handleChange(e)} />
            <br/>
  
            <button type="submit">
              Submit
            </button>

          </form>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      Task: state.Task,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editTask: (Task) => dispatch(editTaskThunk(Task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);