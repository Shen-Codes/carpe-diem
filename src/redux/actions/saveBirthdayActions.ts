export const SAVE_BIRTHDAY = "SAVE_BIRTHDAY";
export const CREATE_DAYS = "CREATE_DAYS";

const SaveBirthday = (birthday: string) => ({
  type: SAVE_BIRTHDAY,
  payload: birthday,
});

const CreateDays = () => ({
  type: CREATE_DAYS,
});

export { SaveBirthday, CreateDays };
