import { Button as MuiButton, ButtonProps} from '@mui/material';
import Link from 'next/link';
import styled from "styled-components";


export const Button = styled(MuiButton)<ButtonProps>`
background-color: #007bff;
color: white;
border: none;
padding: 0.5rem 1rem;
border-radius: 4px;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
gap: 0.5rem;

&:hover {
  background-color: #0056b3;
}
`;

export const SecondaryButton = styled(Button)`
background-color: #6c757d;

&:hover {
  background-color: #5a6268;
}
`;


export const QuillWrapper = styled.div`
  .ql-container {
    border: 1px solid #ccc;
    font-size: 16px;
    resize: vertical;
    min-height: 220px;
    max-height: 500px;
    overflow-y: auto;
  }
  .ql-editor {
    padding: 10px;
    min-height: 120px;
  }
  .ql-toolbar {
    border-bottom: 1px solid #ccc;
  }
`;


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
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;

  &:not(:last-child)::after {
    content: "/";
    margin-left: 8px;
    color: #999;
  }
`;

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #0056b3;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 4px;
  color: #007bff;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: #666;
`;

export const UploadArea = styled.div<{ hasImage: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px dashed #007bff;
  border-radius: 8px;
  background-color: ${props => (props.hasImage ? "#f8f9fa" : "#fff")};
  cursor: pointer;
`;

export const UploadIcon = styled.div`
  font-size: 24px;
  color: #007bff;
`;

export const UploadText = styled.span`
  margin-left: 8px;
`;

export const ImagePreview = styled.div`
  display: flex;
  align-items: center;
`;

export const RemoveLink = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
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
  margin: 20px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;