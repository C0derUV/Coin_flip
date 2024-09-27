import { combineReducers } from 'redux';
import AdminReducer from './user/reducer';
import UserReducer from './user/reducer';
const rootReducer = combineReducers({
  UserReducer: UserReducer,
  AdminReducer:AdminReducer
});

export default rootReducer;
