import JsonServer from '../apis/JsonServer';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const streamCreate = formValues => async (dispatch, getState)=> {
  const { userId } = getState().auth;
  const response  = await JsonServer.post('/streams', { ...formValues, userId});
		
  dispatch({type: CREATE_STREAM, payload: response.data});
  history.push('/');	
};
export const streamList = () => async dispatch => {
  const response = await JsonServer.get('/streams');		
  dispatch ({
	type: FETCH_STREAMS,
	payload: response.data,
  });
};
export const streamFetch = id => async dispatch => {
  const response = await JsonServer.get(`/streams/${id}`);		
  dispatch ({
    type: FETCH_STREAM,
    payload: response.data
  });
};
export const streamEdit = (formValue,id) => async (dispatch, getState) => {
  const response  = await JsonServer.patch(`/streams/${id}`, { ...formValue, id});
  dispatch({type: EDIT_STREAM, payload: response.data});
  history.push('/');	
};
export const streamDelete = (id) => async (dispatch) => {
  history.push('/');
  await  JsonServer.delete(`streams/${id}`);
  dispatch( {
    type: DELETE_STREAM,
    payload: id,
  });
};
