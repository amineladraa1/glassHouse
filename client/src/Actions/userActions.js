import * as api from '../Api/Api.js';

export const signUpAction = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    history.push('/feed');
    dispatch({ type: 'Auth', data });
  } catch (error) {
    console.log(error);
  }
};
export const signInAction = (form, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);
    history.push('/feed');
    dispatch({ type: 'Auth', data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const logoutAction = (history) => async (dispatch) => {
  history.push('/');
  dispatch({ type: 'LOGOUT' });
};
