import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk } from '../../store/thunks';


class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          timeslot: "",
          EmployeeId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting Task ID from url
        this.props.fetchTask(this.props.match.params.id);
        this.setState({
            title: this.props.Task.title, 
            timeslot: this.props.Task.timeslot,
            EmployeeId: this.props.Task.EmployeeId, 
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
            title: this.state.title,
            timeslot: this.state.timeslot,
            EmployeeId: this.state.EmployeeId
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
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
            <input type="text" name="timeslot" value={this.state.timeslot} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>EmployeeId: </label>
            <input type="text" name="EmployeeId" value={this.state.EmployeeId} onChange={(e) => this.handleChange(e)} />
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