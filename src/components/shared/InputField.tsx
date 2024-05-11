import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

interface Props extends OutlinedTextFieldProps {
  min?: number;
  max?: number;
}

const InputField: React.FC<Props> = ({ min, max, onChange, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value, 10);

    if (
      (min !== undefined && value < min) ||
      (max !== undefined && value > max)
    ) {
      if (min !== undefined && value < min) {
        event.target.value = min.toString();
      }
      if (max !== undefined && value > max) {
        event.target.value = max.toString();
      }
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <TextField {...props} onChange={handleChange} inputProps={{ min, max }} />
  );
};

export default InputField;
