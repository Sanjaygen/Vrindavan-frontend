import { InputHTMLAttributes } from 'react';

export interface UiInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    placeholder?: string;
    fullWidth?: boolean;
    width?: number | string;
    variant?: 'standard' | 'outlined' | 'filled';
    type?: 'text' | 'number' | 'email' | 'tel';
    ariaName?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    onInputHandler?: () => void;
    helperText?: string;
}