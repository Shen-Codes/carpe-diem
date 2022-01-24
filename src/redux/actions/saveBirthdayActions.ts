export const SAVE_BIRTHDAY = "SAVE_BIRTHDAY";

const SaveBirthday = (birthday: string) => ({
  type: SAVE_BIRTHDAY,
  payload: birthday,
});

export { SaveBirthday };
