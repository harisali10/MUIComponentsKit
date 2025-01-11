import {
  type StandardTextFieldProps,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import styles from './ApplicationTextField.module.scss';

interface StyledTextFieldProps extends StandardTextFieldProps {
  showPassword?: boolean;
  multiline?: boolean;
  rows?: number;
  endAdornment?: React.ReactElement;
  contentEditable?: boolean;
  name?: string;
  inputProps?: object;
  inputType?: string
}

export default function StyledTextField({
  onChange, label, multiline, rows, inputType = 'text',
  helperText, error, onBlur, value, disabled, defaultValue, contentEditable, name, inputProps
}: StyledTextFieldProps) {
  return (
    <TextField
      contentEditable={contentEditable}
      onChange={onChange}
      label={label}
      onBlur={onBlur}
      name={name}
      value={value}
      disabled={disabled}
      className={styles.styledTextField}
      error={error}
      rows={rows}
      multiline={multiline}
      defaultValue={defaultValue}
      helperText={helperText}
      type={inputType}
      fullWidth
      slotProps={{
        input: {
          ...inputProps,
        }
      }}
    />
  );
}
