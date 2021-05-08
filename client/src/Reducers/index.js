import { combineReducers } from 'redux';

import formData from './formData';
import PostReducer from './PostReducer';
import userReducer from './UserReducer';

export default combineReducers({
  formData,
  PostReducer,
  userReducer,
});
