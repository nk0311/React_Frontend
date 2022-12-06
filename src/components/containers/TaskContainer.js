import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk } from "../../store/thunks";
import { TaskView } from "../views";

class TaskContainer extends Component {
  componentDidMount() {
    //getting Task ID from url
    this.props.fetchTask(this.props.match.params.id);
  }

  render() {
    return (
      <TaskView 
        Task={this.props.Task}
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