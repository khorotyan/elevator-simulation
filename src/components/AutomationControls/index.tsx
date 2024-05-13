import { useChangeAppStateAutomatedValue } from "../../hooks/application/automationControls/useChangeAppStateAutomatedValue";
import { useChangePassengerCreationAutomatedValue } from "../../hooks/application/automationControls/useChangePassengerCreationAutomatedValue";
import { useIsAppStateAutomated } from "../../hooks/application/automationControls/useIsAppStateAutomated";
import { useIsPassengerCreationAutomated } from "../../hooks/application/automationControls/useIsPassengerCreationAutomated";
import { usePassengerCreationFrequency } from "../../hooks/application/automationControls/usePassengerCreationFrequency";
import { useStateChangeFrequency } from "../../hooks/application/automationControls/useStateChangeFrequency";
import { useUpdatePassengerCreationFrequency } from "../../hooks/application/automationControls/useUpdatePassengerCreationFrequency";
import { useUpdateStateChangeFrequency } from "../../hooks/application/automationControls/useUpdateStateChangeFrequency";
import { useIsApplicationInitialized } from "../../hooks/application/useIsApplicationInitialized";
import Checkbox from "../shared/CheckBox";
import InputField from "../shared/InputField";
import useStyles from "./style";

const AutomationControls: React.FC = () => {
  const classes = useStyles();
  const isApplicationInitialized = useIsApplicationInitialized();
  const isPassengerCreationAutomated = useIsPassengerCreationAutomated();
  const isAppStateAutomated = useIsAppStateAutomated();
  const passengerCreationFrequency = usePassengerCreationFrequency();
  const stateChangeFrequency = useStateChangeFrequency();
  const changePassengerCreationAutomatedValue =
    useChangePassengerCreationAutomatedValue();
  const changeAppStateAutomatedValue = useChangeAppStateAutomatedValue();
  const updatePassengerCreationFrequency =
    useUpdatePassengerCreationFrequency();
  const updateStateChangeFrequency = useUpdateStateChangeFrequency();

  const handleUpdatePassengerCreationFrequency = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const frequency = parseInt(event.target.value) || 2;
    updatePassengerCreationFrequency({ frequency });
  };

  const handleUpdateStateChangeFrequency = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const frequency = parseInt(event.target.value) || 1;
    updateStateChangeFrequency({ frequency });
  };

  return (
    <div className={classes.automationControlsContainer}>
      <div className={classes.row}>
        <Checkbox
          checked={isPassengerCreationAutomated}
          label={`Add Passenger Every ${passengerCreationFrequency} Seconds`}
          onChange={(event) =>
            changePassengerCreationAutomatedValue({
              isAutomated: event.target.checked,
            })
          }
          disabled={!isApplicationInitialized}
        />
        <InputField
          className={classes.input}
          size="small"
          label="Update Frequency"
          type="number"
          variant="outlined"
          value={passengerCreationFrequency}
          onChange={handleUpdatePassengerCreationFrequency}
          min={2}
          max={10}
          disabled={!isApplicationInitialized}
        />
      </div>
      <div className={classes.row}>
        <Checkbox
          checked={isAppStateAutomated}
          label={`Update Application State Every ${stateChangeFrequency} Second${
            stateChangeFrequency !== 1 ? "s" : ""
          }`}
          onChange={(event) =>
            changeAppStateAutomatedValue({
              isAutomated: event.target.checked,
            })
          }
          disabled={!isApplicationInitialized}
        />
        <InputField
          className={classes.input}
          size="small"
          label="Update Frequency"
          type="number"
          variant="outlined"
          value={stateChangeFrequency}
          onChange={handleUpdateStateChangeFrequency}
          min={1}
          max={5}
          disabled={!isApplicationInitialized}
        />
      </div>
    </div>
  );
};

export default AutomationControls;
