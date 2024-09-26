
import DoneIcon from '@mui/icons-material/Done';

import { styled } from '@mui/material/styles';
import { HelperText } from '../inputs/UiInputs.styled';

export const BpIcon = styled(DoneIcon)(() => ({
    border: '1px solid #8C8C8C',
    borderRadius: 5,
    path: {
        display: 'none'
    },
    'input:hover ~ &': {
        border: '1px solid #94D6E9'
    },
    'input:focus ~ &': {
        outline: 'none'
    },
    'input:disabled ~ &': {
        background: '#F5F5F5'
    }
}));

export const BpCheckedIcon = styled(BpIcon)`
  path {
    display: block;
  }
  background: #1976d2;
  color: #fff; 
`;
export const StyledLabel = styled('span')<{ $hasDisabled: boolean }>`
    ${({ $hasDisabled }) =>
        $hasDisabled &&
        `
    color: black;
`}
`;
 
export const ErrorCheckbox = styled(HelperText)`
    margin: 0;
    padding: 0;
`;