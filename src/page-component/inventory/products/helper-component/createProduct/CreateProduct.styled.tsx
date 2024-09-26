import breakpoints from '@/themes/breakpoints';
import { Button as MuiButton, ButtonProps} from '@mui/material';
import Link from 'next/link';
import styled from "styled-components";


export const CreateProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  ${breakpoints.xs}{
    flex-direction: column;
  }
  ${breakpoints.sm}{
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const LeftColumn = styled.div`
  flex: 0.48; 
  display: flex;
  flex-direction: column;
  gap: 16px; 
`;

export const RightColumn = styled.div`
  flex: 0.48; 
  display: flex;
  flex-direction: column;
  gap: 16px; 
`;

export const ProductFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px; 
  justify-content: space-between; 
  margin-bottom: 20px;
  max-width: 1200px; 
  width: 100%; 
`;


export const ProductFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px; 
`;

export const ProductLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProductHelperText = styled.small`
  color: #666;
  margin-top: 4px;
`;

export const ImageDiv = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content:center;
`;

export const ProductUploadArea = styled.div<{ hasImage: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.hasImage ? "#f9f9f9" : "#fff")};
  border: 1px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  height: 150px;
  
`;

export const ProductUploadIcon = styled.div`
  font-size: 38px;
  color: #888;

`;

export const ProductUploadText = styled.div`
  font-size: 14px;
  color: #888
`;

export const ProductImagePreview = styled.div`
  img {
    max-width: 100%;
    max-height: 100px;
    display: block;
  }
`;

export const ProductRemoveLink = styled.a`
  font-size: 12px;
  color: red;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 

`;

export const CheckboxItem = styled.div`
  
`;

export const StyledButton = styled.button<{ variant: "outlined" | "contained" }>`
  padding: 10px 20px;
  border: ${props => (props.variant === "outlined" ? "1px solid #007bff" : "none")};
  background-color: ${props => (props.variant === "outlined" ? "transparent" : "#007bff")};
  color: ${props => (props.variant === "outlined" ? "#007bff" : "#fff")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${props => (props.variant === "outlined" ? "#f0f0f0" : "#0056b3")};
  }
`;

export const StyledHr = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;