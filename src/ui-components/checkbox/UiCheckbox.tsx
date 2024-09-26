import React, { PropsWithChildren, useCallback } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as MUICheckbox } from '@mui/material/Checkbox';

import { BpCheckedIcon, BpIcon, ErrorCheckbox, StyledLabel } from './UiCheckbox.styled';
import { UiCheckboxProps } from './types';
import { Typography } from '@mui/material';

const UiCheckbox = (props: PropsWithChildren<UiCheckboxProps>) => {
    const {
        name,
        label,
        onChange,
        checked,
        ariaLabel = 'nuskin checkbox',
        disabled = false,
        size = 'small',
        testid = 'nuskin-checkbox',
        className = '',
        helperText
    } = props;

    const renderCheckbox = useCallback(
        () => (
            <MUICheckbox
                name={name}
                color="default"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                disableRipple
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                inputProps={
                    {
                        'aria-label': ariaLabel,
                        'data-testid': testid
                    } as React.InputHTMLAttributes<HTMLInputElement>
                }
                size={size}
            />
        ),
        [ariaLabel, checked, disabled, name, onChange, size, testid]
    );

    const renderCheckboxLabel = useCallback(
        () => (
            <Typography variant="body2">
                <StyledLabel className="checkbox-label-text" $hasDisabled={disabled}>
                    {label}
                </StyledLabel>
            </Typography>
        ),
        [disabled, label]
    );

    const renderHelperText = () => {
        if (helperText) {
            return (
                <ErrorCheckbox error id="outlined-weight-helper-text">
                    {helperText}
                </ErrorCheckbox>
            );
        }
    };
    return (
        <>
            <FormControlLabel
                className={className}
                control={renderCheckbox()}
                label={renderCheckboxLabel()}
            />
            {renderHelperText()}
        </>
    );
};

export default UiCheckbox;
