import Button from "@mui/material/Button";
import useStyles from "./style";
import { useProcessTimeUnit } from "../../hooks/application/useProcessTimeUnit";

const TimeControls: React.FC = () => {
  const classes = useStyles();
  const processTimeUnit = useProcessTimeUnit();

  return (
    <div className={classes.timeControlsContainer}>
      <Button variant="contained" onClick={processTimeUnit}>
        Get Next Application State
      </Button>
    </div>
  );
};

export default TimeControls;
