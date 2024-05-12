import useStyles from "./style";
import { useProcessTimeUnit } from "../../hooks/application/useProcessTimeUnit";
import Button from "../shared/Button";

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
