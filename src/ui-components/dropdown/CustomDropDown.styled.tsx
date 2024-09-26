import styled from "styled-components";

export const CustomDropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomDropdownInput = styled.input<{ width: string,hasIcon?: boolean;}>`
  width: ${(props) => props.width};
  padding: 10px;
  padding-right: ${(props) => (props.hasIcon ? '40px' : '8px')}; /* Space for the icon */
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  // margin-left:10px; 
`;

export const CustomDropdownList = styled.div<{ width: string }>`
  position: absolute;
  width: ${(props) => props.width};
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 10;
  // margin-left:10px; 
  top: 100%; 
//   border-radius: 4px; 
`;

export const CustomDropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const CustomSearchInput = styled.input<{ width: string }>`
  width: ${(props) => props.width};
  margin-top:5px;
  margin-bottom:5px;
  margin-left:5px;
  margin-right:5px;
  padding: 10px;
  border: 1px solid #ccc;
  outline:none; 
`;

export const CustomIconContainer = styled.div<{ right: string }>`
  position: absolute;
  right: ${(props) => props.right};
  top: 20px;
  transform: translateY(-50%);
  pointer-events: none; 
  height: 100%;
  width: 30px; 
  display: flex;
  align-items: center;
  justify-content: center;
`;
