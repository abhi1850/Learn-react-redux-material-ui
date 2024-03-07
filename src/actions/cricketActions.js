import {
    FETCH_CRICKETERS_SUCCESS,
    ADD_CRICKETER_SUCCESS,
    DELETE_CRICKETER_SUCCESS,
    EDIT_CRICKETER_SUCCESS,
    API_FAILURE
  } from '../constants/actionTypes';
  
  export const fetchCricketers = () => {
    return async (dispatch) => {
      try {
        // Your fetch logic here
      } catch (error) {
        dispatch({ type: API_FAILURE, payload: error });
      }
    };
  };
  
  export const addCricketer = (cricketer) => {
    return async (dispatch) => {
      try {
        // Your add logic here
      } catch (error) {
        dispatch({ type: API_FAILURE, payload: error });
      }
    };
  };
  
  export const editCricketer = (id, cricketer) => {
    return async (dispatch) => {
      try {
        // Your edit logic here
      } catch (error) {
        dispatch({ type: API_FAILURE, payload: error });
      }
    };
  };
  
  export const deleteCricketer = (id) => {
    return async (dispatch) => {
      try {
        // Your delete logic here
      } catch (error) {
        dispatch({ type: API_FAILURE, payload: error });
      }
    };
  };
  