import {LOGIN, LOGOUT} from '~constant/actionType';

const intiAccountState = {
  accessToken: '',
};

export const accountReducer = (state = intiAccountState, action) => {
  switch (action.type) {
    //LAST-SEARCH
    case LOGIN:
      return {
        accessToken: action.value,
      };
    case LOGOUT:
      return {
        acccessToken: '',
      };
    default:
      return state;
  }
};
