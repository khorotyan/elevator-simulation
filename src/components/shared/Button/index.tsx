import { Button as MuiButton, ButtonProps } from "@mui/material";
import useStyles from "./style";

const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();

  return <MuiButton {...props} className={classes.button} />;
};

export default Button;
