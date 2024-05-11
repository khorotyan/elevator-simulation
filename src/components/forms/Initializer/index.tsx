import Button from "@mui/material/Button";
import useStyles from "../style";
import InputField from "../../shared/InputField";
import { useInitialize } from "../../../hooks/application/useInitialize";
import { useState } from "react";

const minFloorsCount = 2;
const minElevatorsCount = 1;

const InitializerForm: React.FC = () => {
  const classes = useStyles();
  const initialize = useInitialize();
  const [floorsCount, setFloorsCount] = useState(minFloorsCount);
  const [elevatorsCount, setElevatorsCount] = useState(minElevatorsCount);

  const handleFloorsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFloorsCount(parseInt(event.target.value) || minFloorsCount);
  };

  const handleElevatorsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setElevatorsCount(parseInt(event.target.value) || minElevatorsCount);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    initialize({ elevatorsCount, floorsCount });
  };

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <InputField
        className={classes.input}
        size="small"
        label="Floors"
        type="number"
        variant="outlined"
        value={floorsCount}
        onChange={handleFloorsChange}
        min={minFloorsCount}
        max={500}
      />
      <InputField
        className={classes.input}
        size="small"
        label="Elevators"
        type="number"
        variant="outlined"
        value={elevatorsCount}
        onChange={handleElevatorsChange}
        min={minElevatorsCount}
        max={50}
      />
      <Button type="submit" variant="contained">
        Initialize
      </Button>
    </form>
  );
};

export default InitializerForm;
