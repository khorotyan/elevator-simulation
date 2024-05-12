import Button from "@mui/material/Button";
import useStyles from "../style";
import InputField from "../../shared/InputField";
import { useState } from "react";
import { useFloorsCount } from "../../../hooks/application/useFloorsCount";
import { useAddPassenger } from "../../../hooks/application/useAddPassenger";
import classNames from "classnames";
import { enqueueSnackbar } from "notistack";

const defaultInitialFloor = 0;
const defaultTargetFloor = 1;

const PassengerForm: React.FC = () => {
  const classes = useStyles();
  const maxFloors = useFloorsCount() - 1;
  const addPassenger = useAddPassenger();
  const [initialFloor, setInitialFloor] = useState(defaultInitialFloor);
  const [targetFloor, setTargetFloor] = useState(defaultTargetFloor);
  const isDisabled = maxFloors < 1;

  const handleInitialFloorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInitialFloor(parseInt(event.target.value) || 0);
  };

  const handleTargetFloorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetFloor(parseInt(event.target.value) || 0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (initialFloor === targetFloor) {
      enqueueSnackbar("Initial and target floors should be different", {
        variant: "error",
      });
      return;
    }

    addPassenger({ initialFloor, targetFloor });
  };

  return (
    <form
      className={classNames(classes.formContainer, {
        "with-margin": true,
      })}
      onSubmit={handleSubmit}
    >
      <InputField
        className={classes.input}
        size="small"
        label="Initial Floor"
        type="number"
        variant="outlined"
        value={initialFloor}
        onChange={handleInitialFloorChange}
        min={0}
        max={maxFloors}
        disabled={isDisabled}
      />
      <InputField
        className={classes.input}
        size="small"
        label="Target Floor"
        type="number"
        variant="outlined"
        value={targetFloor}
        onChange={handleTargetFloorChange}
        min={0}
        max={maxFloors}
        disabled={isDisabled}
      />
      <Button type="submit" variant="contained" disabled={isDisabled}>
        Add Passenger
      </Button>
    </form>
  );
};

export default PassengerForm;
