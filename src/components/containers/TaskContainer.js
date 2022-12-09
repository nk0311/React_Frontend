import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk } from "../../store/thunks";
import { TaskView } from "../views";

class TaskContainer extends Component {
  constructor() {
    super()
    this.state = {
      task : {}
    }
  }

  componentDidMount() {
    //getting Task ID from url
    // this.state.task = await this.props.fetchTask(this.props.match.params.id)

    this.loadTasks(this.props.match.params.id)
    // this.props.fetchTask(this.props.match.params.id);
  }  
  async loadTasks (taskId){
    await this.props.fetchTask(taskId).then(res=>{
      this.setState({task:res })
    })
  } 

  render() {
    return (
      <TaskView 
        task={this.state.task}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    Task: state.Task,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(TaskContainer);