import { STORE_SESSION } from '../actions/session.action';

const INITIAL_STATE = {
  authenticated: false,
  userProfile: {
    email: '',
    photo: '',
    name: '',
  },
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_SESSION:
      return Object.assign(
        {},
        { authenticated: true },
        { userProfile: action.userProfile },
      );
    default:
      return state;
  }
};

export default sessionReducer;
