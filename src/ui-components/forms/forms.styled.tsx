import styled from "styled-components";

export const PhoneNumberStyled = styled('input')<{ width: string | number }>`
    border: .1px solid grey;
    border-radius: 4px;
    display:flex;
    height: 38px;
    padding:10px;
      width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
    margin-bottom:10px;
    
        input {
        border: none; /* Removes the underline */
        outline: none;
        background-color: transparent;
        width: 100%;
    }
`;