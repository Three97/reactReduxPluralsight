import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // short-hand property names allows us to just use "courses", but let's be more explicit
  courses: courses,
  authors: authors,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
