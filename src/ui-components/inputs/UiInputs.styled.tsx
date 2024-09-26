import { FormHelperText, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputStyled = styled(OutlinedInput)<{ width: string | number }>`
  border-radius: 4px;
  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
  height: 38px;
`;


export const HelperText = styled(FormHelperText)`
    margin: 10px 0px 10px 0px;
`;
