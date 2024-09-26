import { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
import React from 'react';

export type UiCheckboxProps = {
    label?: string;
    name?: string;
    className?: string;
    checked: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    size?: 'small' | 'medium';
    testid?: string;
    helperText?: string | React.ReactNode ;
    showCheckIocn?: boolean;
    
} & MUICheckboxProps;
