import { SAVE_BIRTHDAY } from "../actions";

interface RootState {
  birthday: string;
}

const INITIAL_STATE = {
  birthday: "12/1/2020",
};

const bdayReducer = (state = INITIAL_STATE, action: any) => {
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

export { bdayReducer };
export type { RootState };
