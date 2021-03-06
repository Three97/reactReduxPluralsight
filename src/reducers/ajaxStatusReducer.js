import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  // all of our ajax calls ('actions') end with "SUCCESS", so let's leverage that convention here
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
