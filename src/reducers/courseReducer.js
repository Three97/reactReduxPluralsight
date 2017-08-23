import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      // this might seem like the most obvious way to go, but don't. state should be immutable. approach accordingly
      // state.push(action.course);
      // return state;
      // ...state = spread operator
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      // since the store will go through all reducers, be sure to return original state if the action
      // does not match anything in this particular reducer.
      return state;
  }
}
