const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const screenRation = windowWidth / windowHeight;

export const gridRows = Math.floor(Math.sqrt(32120 / screenRation));
export const gridColumns = Math.floor(32120 / gridRows);
