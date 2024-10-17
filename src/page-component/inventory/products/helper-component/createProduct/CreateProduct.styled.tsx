import breakpoints from '@/themes/breakpoints';
import { Button as MuiButton, ButtonProps} from '@mui/material';
import styled from "styled-components";


export const CreateProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
    padding: 20px;
       ${breakpoints.xs} {
    padding: 10px;
  }
   ${breakpoints.md} {
    padding: 15px;
  }
      ${breakpoints.lg} {
    padding: 20px;
  }
      ${breakpoints['2xl']} {
      display: flex;
  flex-direction: column;
    padding: 20px;
    }
`;

export const LeftColumn = styled.div`
  flex: 0.48; 
  display: flex;
  flex-direction: column;
  gap: 16px; 
    ${breakpoints.xs} {
    flex: 1; 
  }
      ${breakpoints.md} {
    flex: 0.6;
  }
      ${breakpoints.lg} {
    flex: 0.55;
  }
      ${breakpoints['2xl']} {
     flex: 0.48; 
  display: flex;
  flex-direction: column;
  gap: 16px; 
    }
`;

export const RightColumn = styled.div`
  flex: 0.48; 
  display: flex;
  flex-direction: column;
  gap: 16px; 
  ${breakpoints.xs} {
    flex: 1;
  }
     ${breakpoints.md} {
    flex: 0.6;
  }
      ${breakpoints.lg} {
    flex: 0.55;
  }
      ${breakpoints['2xl']} {
     flex: 0.48; 
  display: flex;
  flex-direction: column;
  gap: 16px; 
    }
`;

export const ProductFormContainer = styled.div`
 margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px; 
  justify-content: space-between; 
  margin-bottom: 20px;
  max-width: 1200px; 
  width: 100%; 
     ${breakpoints.xs} {
    flex-direction: column; 
  }
   ${breakpoints.md} {
   flex-direction: row;

  }
     ${breakpoints.lg} {
    gap: 30px;
  }
     ${breakpoints['2xl']} {
     margin-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px; 
  justify-content: space-between; 
  margin-bottom: 20px;
  max-width: 1200px; 
  width: 100%; 
    }
`;


export const ProductFormGroup = styled.div`
  display: flex;
  margin-bottom: 8px;
  gap: 8px; 
    ${breakpoints.xs} {
    flex-direction: column; 
  }
  ${breakpoints.md} {
    max-width: 800px; 
  }
      ${breakpoints.lg} {
    max-width: 900px;
  }
     ${breakpoints['2xl']} {
    display: flex;
    flex-direction: row; 
  margin-bottom: 8px;
  gap: 8px; 
    }
`;

export const ProductLabel = styled.label`
  // display: block;
  font-weight: bold;
  margin-right: 8px; 
  min-width: 110px; 
  text-align: right;
       ${breakpoints.xs} {
    min-width: auto; 
    text-align: left; 
  }
     ${breakpoints.md} {
    text-align: left;
  }
      ${breakpoints.lg} {
    min-width: 120px;
  }
     ${breakpoints['2xl']} {
     font-weight: bold;
  margin-right: 8px; 
  min-width: 110px; 
  text-align: right;
    }
`;

export const ProductHelperText = styled.span`
  
  color: #666;
  margin-top: 8px;
  ${breakpoints.xs} {
    font-size: 0.75rem; 
  }
     ${breakpoints.md} {
    font-size: 0.8rem;
  }
      ${breakpoints.lg} {
    font-size: 0.85rem;
  }
       ${breakpoints['2xl']} {
       font-size: 0.875rem;
     margin-top: 8px;
    }
`;

export const ImageDiv = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content:center;
   ${breakpoints.xs} {
    align-items: center; 
  }
      ${breakpoints.md} {
    justify-content: flex-start;
  }
      ${breakpoints.lg} {
    justify-content: center;
  }
     ${breakpoints['2xl']} {
      display:flex;
  flex-direction:column;
  text-align:center;
  justify-content:center;
    }
`;

export const ProductUploadArea = styled.div<{ hasImage: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  // width: 350px;
  background-color: ${(props) => (props.hasImage ? "#f9f9f9" : "#fff")};
  border: 1px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  // height: 150px;
    ${breakpoints.xs} {
    width: 100%; 
    height: 100px; 
  }

  ${breakpoints.md} {
    height: 120px;
    width: 350px;
  }
      ${breakpoints.lg} {
    height: 130px;
    width: 350px;
  }
       ${breakpoints['2xl']} {
    width: 450px;
     height: 170px;
    }
`;

export const ProductUploadIcon = styled.div`
 
  color: #888;
     ${breakpoints.xs} {
    font-size: 30px; 
  }
      ${breakpoints.md} {
    font-size: 35px;
  }
     ${breakpoints['2xl']} {
     font-size: 38px;
    }
`;

export const ProductUploadText = styled.div`
  font-size: 14px;
  color: #888
        ${breakpoints.xs} {
    font-size: 12px; 
  }

  ${breakpoints.md} {
    font-size: 13px;
  }
     ${breakpoints['2xl']} {
     font-size: 14px;
    }
`;

export const ProductImagePreview = styled.div`
  img {
    max-width: 100%;
    max-height: 100px;
    display: block;
  }
        ${breakpoints.xs} {
        img {
      max-height: 80px;
  }
    }
   ${breakpoints.md} {
    img {
      max-height: 90px;
    }
  }
     ${breakpoints['2xl']} {
      img {
    max-width: 100%;
    max-height: 100px;
    display: block;
  }
    }
`;

export const ProductRemoveLink = styled.a`
  font-size: 12px;
  color: red;
  cursor: pointer;
    ${breakpoints.xs} {
    font-size: 10px; 
  }
     ${breakpoints.md} {
    font-size: 11px;
  }
       ${breakpoints['2xl']} {
     font-size: 12px;
  color: red;
  cursor: pointer;
    }
`;
export const CustomDropdownWrapper = styled.div`
  position: relative;

  .custom-icon-right {
    right: 10px; 

   ${breakpoints.xs} {
      right: 10px;
    }
    ${breakpoints.md} {
      right: 10px;
    }
   ${breakpoints.lg} {
      right: 10px;
    }
    ${breakpoints['xl']} {
     right: 190px;
    }
       ${breakpoints['2xl']} {
     right: 10px;
    }
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; 
     ${breakpoints.xs} {
    flex-direction: column; 
    gap: 8px;
  }
      ${breakpoints.md} {
    flex-direction: row;
    gap: 12px;
  }
      ${breakpoints.lg} {
    gap: 16px;
  }
       ${breakpoints['2xl']} {
     display: flex;
  flex-wrap: wrap;
  gap: 16px; 
    }
`;


export const CheckboxItem = styled.div`
display: flex;
align-items: center;
flex-basis: calc(50% - 18%); 
 ${breakpoints.xs} {
    flex-basis: 100%; 
  }
     ${breakpoints.md} {
    flex-basis: calc(50% - 20%);
  }
      ${breakpoints.lg} {
    flex-basis: calc(50% - 22%);
  }
      ${breakpoints['2xl']} {
    display: flex;
align-items: center;
flex-basis: calc(50% - 18%); 

    }
`;

export const StyledHr = styled("hr")`
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: 1.5rem 0;
    ${breakpoints.xs}{
    margin: 1rem 0; 
  }
     ${breakpoints.md} {
    margin: 1.25rem 0;
  }
      ${breakpoints['2xl']} {
    margin: 1.5rem 0;
    }
`;
export const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 1rem;
     ${breakpoints.xs} {
    flex-direction: row; 
    align-items: flex-end; 
    gap: 8px; 
  }
     ${breakpoints.md} {
    gap: 12px;
  }
      ${breakpoints['2xl']} {
    
    }
`;
export const Button = styled(MuiButton)<ButtonProps>`
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
    ${breakpoints.xs} {
    font-size: 0.875rem; 
    padding: 0.4rem 0.8rem; 
  }
      ${breakpoints.md} {
    font-size: 0.9rem;
    padding: 0.45rem 0.9rem;
  }
      ${breakpoints.lg} {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
     ${breakpoints['2xl']} {
    
    }

`;
export const SecondaryButton = styled(Button)`
  background-color: #F1F1F1 !important;
  color: black !important;
  &:hover {
    background-color: grey;
  }
      ${breakpoints.xs} {
    font-size: 0.875rem; 
    padding: 0.4rem 0.8rem; 
  }
     ${breakpoints.md} {
    font-size: 0.9rem;
    padding: 0.45rem 0.9rem;
  }
      ${breakpoints.lg} {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
     ${breakpoints['2xl']} {
    
    }
  
`;