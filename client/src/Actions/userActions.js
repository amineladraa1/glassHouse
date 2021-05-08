import * as api from '../Api/Api.js';

export const signUpAction = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: 'SIGNUP', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const signInAction = (form) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);
    dispatch({ type: 'SIGNIN', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
