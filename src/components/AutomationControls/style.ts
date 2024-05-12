import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  automationControlsContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
  },

  row: {
    display: "flex",
    alignItems: "center",
    marginBottom: 4,
  },

  input: {
    width: 150,
  },
});

export default useStyles;
