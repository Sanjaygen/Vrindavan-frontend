'use client';

import { Controller } from 'react-hook-form';
import UiInput from '../inputs/UiInputs';
import { UiFormsProps } from './types';

const FormInput = (props: UiFormsProps) => {
    const { id, name = 'UpInput', control, rules,placeholder,width,errorText,type} = props;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
                <UiInput
                    {...ref}
                    id={id ? id : name}
                    fullWidth 
                    type={type as 'text' | 'number' | 'email' | 'tel'} 
                    width = {width}
                    placeholder = {placeholder}
                    onInputHandler={onChange}
                    value={value}
                    helperText={errorText as string}
                />
            )}
        />
    );
};

export default FormInput;
