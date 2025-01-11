import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';

function StyledButton({ children, ...rest }: ButtonProps) {
  return <Button {...rest}>{children}</Button>;
}

export default StyledButton;
