import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  formContainer: {
    display: "flex",
    alignItems: "center",

    "&.with-margin": {
      marginTop: 48,
    },
  },

  input: {
    marginRight: 8,
    minWidth: 140,
  },
});

export default useStyles;
