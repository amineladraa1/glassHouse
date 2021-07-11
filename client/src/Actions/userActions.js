import * as api from '../Api/Api.js';

export const signUpAction = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: 'Auth', data });
    history.push('/feed');
  } catch (error) {
    console.log(error);
  }
};
export const signInAction = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);
    console.log(data);
    dispatch({ type: 'Auth', data });
    history.push('/feed');
  } catch (error) {
    console.log(error.response);
  }
};

export const logoutAction = (history) => async (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  history.push('/');
};
