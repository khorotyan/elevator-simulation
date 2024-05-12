import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

interface Props extends OutlinedTextFieldProps {
  min?: number;
  max?: number;
}

const InputField: React.FC<Props> = ({ min, max, onChange, ...props }) => {
  return <TextField {...props} onChange={onChange} inputProps={{ min, max }} />;
};

export default InputField;
