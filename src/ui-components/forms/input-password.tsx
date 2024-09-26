import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UiFormsProps } from './types';
import UiInput from '../inputs/UiInputs';

const FormPassword = (props: UiFormsProps) => {
  const { control, rules, errorText, name } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name || ''}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field: { onChange, value, ref } }) => (
        <UiInput
          {...ref}
          fullWidth
          type={showPassword ? 'text' : 'password'}
          onInputHandler={onChange}
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          helperText={errorText as string}
        />
      )}
    />
  );
};

export default FormPassword;
