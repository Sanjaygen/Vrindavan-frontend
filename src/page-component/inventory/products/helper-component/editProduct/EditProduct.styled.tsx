import { Button as MuiButton, ButtonProps } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export const FormContainer = styled("div")`
  display: grid;
  grid-template-columns: 67% 55%;
  gap: 1rem;
  width: 84%;
`;

export const FormColumn = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormRow = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
`;

export const Label = styled("label")`
  font-weight: 600;
  font-size: 16px;
  width: 20%;
  margin-right: 1rem;
  text-align: right;
`;

export const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled("input")`
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 0.25rem;
`;

export const HelperText = styled("span")`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: #666;
  margin-top: 8px;
`;

// Image preview box
export const ImagePreview = styled("div")`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RemoveLink = styled(Link)`
  display: block;
  margin-top: 0.5rem;
  color: #ff0000;
  cursor: pointer;
  font-size: 0.875rem;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const UploadArea = styled("div")<{ hasImage: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  padding: 1rem;
  width: 90%;
  height: 150px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ hasImage }) => (hasImage ? "#f9f9f9" : "#fff")};
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const UploadIcon = styled("span")`
  font-size: 2rem;
  color: #666;
  margin-right: 0.5rem;
`;

export const UploadText = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

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

export const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 1rem;
`;

export const StyledHr = styled("hr")`
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: 1.5rem 0;
`;

export const StyledButton = styled(MuiButton)<ButtonProps>`
  position: relative;
  left: 67%;
  bottom: 65px;
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

export const HeaderTitle = styled.div`
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
