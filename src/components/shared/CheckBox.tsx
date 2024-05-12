import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

interface Props {
  checked: boolean;
  disabled: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ checked, disabled, label, onChange }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <MuiCheckbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          size="large"
        />
      }
    />
  );
};

export default Checkbox;
