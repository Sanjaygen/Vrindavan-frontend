'use client';

import { Controller } from 'react-hook-form';
import { FormCheckboxProps } from './types';
import UiCheckbox from '../checkbox/UiCheckbox';

const FormCheckbox = (props: FormCheckboxProps) => {
    const { id, name, control,rules, label,errorText,showCheckIocn } = props;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value, ref } }) => (
                <UiCheckbox
                    label={label}
                    name={name}
                    checked={value}
                    {...ref}
                    id={id ? id : name}
                    onChange={onChange}
                    value={value}
                    helperText={errorText}
                    showCheckIocn={showCheckIocn} 
                />
            )}
        />
    );
};

export default FormCheckbox;
