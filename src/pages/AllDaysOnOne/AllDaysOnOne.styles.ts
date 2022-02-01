import { createUseStyles } from "react-jss";

export const windowHeight = window.innerHeight;
export const windowWidth = window.innerWidth;
const screenRation = windowWidth / windowHeight;

export const gridRows = Math.floor(Math.sqrt(32120 / screenRation));
export const gridColumns = Math.floor(32120 / gridRows);

export const useStyles = createUseStyles({
  daysContainer: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100vw",
    height: "100vh",
    display: "grid",
    padding: "0.5rem",
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gridTemplateRows: `repeat(${gridRows}, 1fr)`,
    gap: "1px",
  },
});
