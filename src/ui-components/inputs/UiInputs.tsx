import { FormControl } from '@mui/material';
import React, { forwardRef } from 'react';
import { UiInputProps } from './types';
import { HelperText, InputStyled } from './UiInputs.styled';

const UiInput = forwardRef<HTMLInputElement, UiInputProps>((props, ref) => {
    const {
        id,
        className,
        placeholder,
        fullWidth = false,
        width,
        variant = 'outlined',
        type,
        ariaName,
        startAdornment,
        endAdornment,
        onInputHandler,
        value,
        helperText,
    } = props;

    const renderHelperText = () => {
        if (helperText) {
            return (
                <HelperText error id={`${id}-helper-text`}>
                    {helperText}
                </HelperText>
            );
        }
        return null;
    };

    return (
        <FormControl
            sx={{ width: fullWidth ? '100%' : width }}
            variant={variant}
            className={className}
        >
            <InputStyled
                id={id}
                ref={ref}
                placeholder={placeholder}
                type={type}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                aria-describedby={`${id}-helper-text`}
                inputProps={{
                    'aria-label': ariaName,
                }}
                value={value}
                onChange={onInputHandler}
                fullWidth={fullWidth} width={''}            />
            {renderHelperText()}
        </FormControl>
    );
});

// Adding display name for better debugging
UiInput.displayName = 'UiInput';

export default UiInput;
