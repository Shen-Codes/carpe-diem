import { SAVE_BIRTHDAY, CREATE_DAYS } from "../actions";

const INITIAL_STATE = {
  birthday: "2000-01-01",
  allDays: ["2000-01-01"],
};

const bdayState = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SAVE_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload,
      };
    case CREATE_DAYS:
      const { birthday } = state;
      const [year, month, day] = birthday.split("-");
      const allDays = [];
      for (let i = 0; i < 32120; i++) {
        allDays.push(new Date(Number(year), Number(month) - 1, Number(day) + i).toLocaleDateString());
      }
      return {
        ...state,
        allDays,
      };
    default:
      return state;
  }
};

export { bdayState };
