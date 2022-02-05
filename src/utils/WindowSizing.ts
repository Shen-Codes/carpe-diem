export const windowHeight = window.innerHeight;
export const windowWidth = window.innerWidth;
export const screenRation = windowWidth / windowHeight;

export const gridRows = Math.floor(Math.sqrt(30000 / screenRation));
export const gridColumns = Math.floor(30000 / gridRows);

export const gridCellWidth = Math.floor((windowWidth - 16) / gridColumns);
export const gridCellHeight = (windowHeight - 16) / gridRows;
