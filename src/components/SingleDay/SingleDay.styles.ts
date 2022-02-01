import { createUseStyles } from "react-jss";
import { gridRows, gridColumns, windowHeight, windowWidth } from "../../pages/AllDaysOnOne/AllDaysOnOne.styles";

const height = windowHeight / gridRows;
const width = windowWidth / gridColumns;

export const useStyles = createUseStyles({
  singleDay: {
    backgroundColor: "green",
    // minHeight: "100%",
    borderRadius: "50%",
    height: `${height}px`,
    width: `${width}px`,
  },
  past: {
    backgroundColor: "rgb(109, 109, 109)",
  },
});
