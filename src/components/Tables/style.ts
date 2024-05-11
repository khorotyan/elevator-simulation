import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tableWrapper: {
    minWidth: 480,
    marginTop: 24,
    width: "min-content",
  },

  tableContainer: {
    overflow: "auto",
    maxHeight: "85vh",
    maxWidth: "90vw",
  },

  table: {
    textWrap: "nowrap",
  },

  tableTitle: {
    padding: "16px",
    backgroundColor: "#f5f5f5",
    margin: 0,
  },

  stickyHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 101,
  },

  stickyColumn: {
    position: "sticky",
    left: 0,
    backgroundColor: "white",
    zIndex: 100,
  },

  boldText: {
    fontWeight: 600,
  },
});

export default useStyles;
