import React from "react";
import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

interface Props extends OutlinedTextFieldProps {
  min?: number;
  max?: number;
}

const InputField: React.FC<Props> = ({
  min,
  max,
  onChange,
  onBlur,
  ...props
}) => {
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    let value = parseFloat(event.target.value);
    let correctedValue = value;

    if (min !== undefined && value < min) {
      correctedValue = min;
    } else if (max !== undefined && value > max) {
      correctedValue = max;
    }

    // force input into the correct range
    if (correctedValue !== value) {
      const newEvent = {
        ...event,
        target: {
          ...event.target,
          value: correctedValue.toString(),
        },
      };
      if (onChange) {
        onChange(newEvent as React.ChangeEvent<HTMLInputElement>);
      }
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <TextField
      {...props}
      onChange={onChange}
      onBlur={handleBlur}
      inputProps={{ min, max, ...props.inputProps }}
    />
  );
};

export default InputField;
