const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case 'Auth':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case 'LOGOUT':
      localStorage.clear();

      return { ...state, authData: null };

    default:
      return state;
  }
};

export default userReducer;
