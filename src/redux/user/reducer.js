import type from './type';

const initialState = {
  isAdminLogin: false,
  AdminDetails: {},
};
const AdminReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case type.fetchAdminLoginSuccess:
      
      return {
        ...state,
        AdminDetails: action.payload,
        isAdminLogin: true,
      };
    case type.AdminlogOutSuccess:
      
      return initialState;
    default:
      return state;
  }
};

export default AdminReducer;
