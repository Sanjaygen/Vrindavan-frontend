'use client';

import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import { FormPhoneNumberInputProps } from './types';
import { useCallback } from 'react';
import { PhoneNumberStyled } from './forms.styled';

const FormPhoneNumberInput = (props: FormPhoneNumberInputProps) => {
    const { name, control, rules, errorText,width } = props;

    const renderHelperText = useCallback(() => {
        if (errorText) {
            return (
                <FormHelperText error id="outlined-weight-helper-text">
                    {errorText}
                </FormHelperText>
            );
        }
    },[errorText]);

    return (
        <>
            <Controller
                name={name || ''}
                control={control}
                rules={rules}
                render={({ field: { onChange, value, ref } }) => {
                    return (
                        <PhoneNumberStyled
                            id={name}
                            width={width || '100%'}
                            onChange={onChange}
                            {...props}
                            value={value}
                            {...ref}
                        />
                    );
                }}
            />
            {renderHelperText()}
        </>
    );
};

export default FormPhoneNumberInput;
