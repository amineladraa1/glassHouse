const initialState = {
  name: '',
  email: '',
  password: '',
  userName: '',
  bio: '',
  phoneNumber: '',
  BirthDate: '',
  city: '',
  profilePic: '',
};

export default (user = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return action.payload;
    case 'SIGNIN':
      return action.payload;
    default:
      return user;
  }
};
