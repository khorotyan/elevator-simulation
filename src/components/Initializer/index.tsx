import Button from "@mui/material/Button";
import useStyles from "./style";
import InputField from "../shared/InputField";
import { useInitialize } from "../../hooks/application/useInitialize";
import { useState } from "react";

const Initializer: React.FC = () => {
  const classes = useStyles();
  const initialize = useInitialize();
  const [floorsCount, setFloorsCount] = useState(1);
  const [elevatorsCount, setElevatorsCount] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    initialize({ elevatorsCount, floorsCount });
  };

  return (
    <form className={classes.initializerForm} onSubmit={handleSubmit}>
      <InputField
        className={classes.input}
        size="small"
        label="Floors"
        type="number"
        variant="outlined"
        value={floorsCount}
        onChange={(e) => setFloorsCount(parseInt(e.target.value) || 1)}
        min={1}
        max={500}
      />
      <InputField
        className={classes.input}
        size="small"
        label="Elevators"
        type="number"
        variant="outlined"
        value={elevatorsCount}
        onChange={(e) => setElevatorsCount(parseInt(e.target.value) || 1)}
        min={1}
        max={50}
      />
      <Button type="submit" variant="contained">
        Initialize
      </Button>
    </form>
  );
};

export default Initializer;
