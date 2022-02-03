import { createUseStyles } from "react-jss";
import { gridCellHeight, gridCellWidth, gridColumns } from "../../utils/WindowSizing";

export const useStyles = createUseStyles({
  daysContainer: {
    maxWidth: "100%",
    maxHeight: "100%",
    // width: "100vw",
    // height: "100vh",
    display: "grid",
    padding: "0.5rem",
    justifyContent: "center",
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    // gridTemplateRows: `repeat(auto-fit, minmax(${gridCellHeight}px, 1fr))`,
    gap: "1px",
  },
});
