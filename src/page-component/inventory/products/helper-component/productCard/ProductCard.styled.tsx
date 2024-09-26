import breakpoints from "@/themes/breakpoints";
import { Button, Typography } from "@mui/material";
import { styled } from "styled-components";

interface ButtonStyleProps {
    color?: string;
  }
  

// Container for the entire card
export const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  ${breakpoints.xs}{ 
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  ${breakpoints.sm}{ 
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

// Container for the label and dropdown
export const LabelDropdownContainer = styled.div`
  align-items: center;
  gap: 10px;
`;

// Container for the buttons
export const ButtonsContainer = styled('div')`
  display: flex;
  gap: 10px;
    ${breakpoints.xs}{ 
    flex-direction: column;
    gap: 10px;
  }
    ${breakpoints.sm}{ 
     flex-direction: row;
    gap: 10px;
  }
`;

export const ButtonStyle = styled(Button)<ButtonStyleProps>`
  && {
    width: 190px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: none;
    background-color: ${(props) => props.color || "#ffffff"};
    color: #ffffff;

    &:hover {
      background-color: ${(props) => props.color || "#000000"};
    }
  }
    ${breakpoints.sm}{  
      && {
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: none;
    background-color: ${(props) => props.color || "#ffffff"};
    color: #ffffff;

    &:hover {
      background-color: ${(props) => props.color || "#000000"};
    }
  }
    }
      ${breakpoints.md}{  
      && {
    width: 170px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: none;
    background-color: ${(props) => props.color || "#ffffff"};
    color: #ffffff;

    &:hover {
      background-color: ${(props) => props.color || "#000000"};
    }
  }
    }
        ${breakpoints.lg}{  
      && {
    width: 190px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: none;
    background-color: ${(props) => props.color || "#ffffff"};
    color: #ffffff;

    &:hover {
      background-color: ${(props) => props.color || "#000000"};
    }
  }
    }
`;

export const TypographyOr = styled(Typography)`
  && {
    font-weight: bold;
    text-align: center;
    font-size: 35px;
    color: #ffffff;
  }
`;

export const TypographyCount = styled(Typography)`
  && {
    font-weight: 300;
    text-align: center;
    margin-top: 5px;
    color: #ffffff;
  }
`;
export const CardLabel = styled.label`
  display: block;
  align-items: center;
  margin-bottom: 8px;
  font-weight: bold;
`;

