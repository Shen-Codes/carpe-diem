import { convertDateToMonthDayYear } from "../../utils/Calendar";
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
      const birthday = state.birthday;
      const [year, month, day] = birthday.split("-");
      const allDays = [];
      for (let i = 0; i < 30000; i++) {
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day) + i);
        const convertedDate = convertDateToMonthDayYear(date);
        allDays.push(convertedDate);
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
