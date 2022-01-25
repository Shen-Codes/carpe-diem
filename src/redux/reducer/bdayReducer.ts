import { SAVE_BIRTHDAY } from "../actions";

const INITIAL_STATE = {
  birthday: "2000-01-01",
};

const bdayState = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SAVE_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload,
      };
    default:
      return state;
  }
};

export { bdayState };
