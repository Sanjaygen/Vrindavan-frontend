import React from 'react';

export type UiFormsProps = {
    id?: string;
    name?: string;
    placeholder?: string;
    fullWidth?:string;
    control: any;
    width: string;
    type?: string;
    rules?: any;
    errorText?: string| React.ReactNode;
    prefix?: string | React.ReactNode;
    sufix?: string | React.ReactNode;
    showCheckIcon?: boolean;
    helperText?: string;
};

export interface OptionsProps {
    value: string;
    label: string;
}
export type UnInputSelectProps = {
    id?: string;
    name?: string;
    options?: OptionsProps[];
    control: any;
    rules?: any;
    errorText?: string | React.ReactNode;
};

export type FormCheckboxProps = {
    id?: string;
    name: string;
    control: any;
    rules?: any;
    label?: string;
    errorText?: string | React.ReactNode;
    showCheckIocn?: boolean;
};

export type  FormPasswordInputProps = {
    name?: string;
    control?: any;
    rules?: any;
    errorText?: string | React.ReactNode;
};
export type  FormPhoneNumberInputProps = {
    name: string;
    control?: any;
    width?: string | number ;
    placeholder?: string;
    label?: string;
    rules?: any;
    errorText?: React.ReactNode;
};