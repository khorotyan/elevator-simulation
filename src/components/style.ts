import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  AppContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,

    "& > h1": {
      margin: [0, 0, 24, 0],
    },
  },
});

export default useStyles;
