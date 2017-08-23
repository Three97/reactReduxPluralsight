import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  // short-hand property names allows us to just use "courses", but let's be more explicit
  courses: courses,
  authors: authors
});

export default rootReducer;
