import React from 'react';
import { MenuItem, Select } from '@mui/material';
import {  UiSelectProps } from './types';
import { FormControlContainer } from './UiSelect.styled';

const EcSelect: React.FC<UiSelectProps> = (props) => {
  const { id, options = [], handleChange, open, selectedValues, onOpen, onClose, onOptionClick } = props;

  const handleOptionClick = (value: string, event: React.MouseEvent<HTMLElement>) => {
    if (onOptionClick) {
      onOptionClick(value, event);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <FormControlContainer>
      <Select
        labelId={`${id}-label`}
        id={id}
        open={open}
        value={selectedValues}
        onChange={handleChange}
        onOpen={onOpen}
        onClose={onClose}
      >
        {options.length === 0 ? (
          <MenuItem disabled>No options available</MenuItem>
        ) : (
          options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={(event) => handleOptionClick(option.value, event)}
            >
              {option.label}
            </MenuItem>
          ))
        )}
      </Select>
    </FormControlContainer>
  );
}
export default EcSelect;