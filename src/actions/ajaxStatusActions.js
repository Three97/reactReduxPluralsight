import * as types from './actionTypes';

export function beginAjaxCall() {
  return { this: types.BEGIN_AJAX_CALL };
}
