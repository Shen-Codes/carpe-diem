export const isPast = (date: string) => {
  const dateTwo = new Date();
  const dateOne = new Date(date);

  const yearOne = parseInt(dateOne.getFullYear().toString());
  const monthOne = parseInt(dateOne.getMonth().toString());
  const dayOne = parseInt(dateOne.getDate().toString());
  const yearTwo = parseInt(dateTwo.getFullYear().toString());
  const monthTwo = parseInt(dateTwo.getMonth().toString());
  const dayTwo = parseInt(dateTwo.getDate().toString());

  if(yearOne === yearTwo && monthOne === monthTwo && dayOne === dayTwo) return 0;
  if(yearOne < yearTwo) return - 1;
  if(yearOne === yearTwo && monthOne < monthTwo) return - 1;
  if(yearOne === yearTwo && monthOne === monthTwo && dayOne < dayTwo) return - 1;
  return 1;
}