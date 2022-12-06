import * as at from "../actions/actionTypes";

// REDUCER;
const allEmployees = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
};

export default allEmployees;