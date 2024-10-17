import breakpoints from "@/themes/breakpoints";
import { styled } from "styled-components";
import { Button as MuiButton, ButtonProps, } from "@mui/material";
export const CategoriesFormContainer = styled.div`
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
export const CategoriesLeftColumn = styled.div`
  flex: 0.50; 
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
export const CategoriesRightColumn = styled.div`
  flex: 0.50; 
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
export const CategoriesFormGroup = styled.div`
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

export const CategoriesLabel = styled.label`
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
export  const HelperDiv = styled.div`
 display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const CategoriesHelperText = styled.span`
  
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
export const ImagesDiv = styled.div`
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
export const CategoriesUploadArea = styled.div<{ hasImage: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 350px;
  background-color: ${(props) => (props.hasImage ? "#f9f9f9" : "#fff")};
  border: 1px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  height: 150px;
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
    width: 350px;
     height: 150px;
    }
`;

export const CategoriesUploadIcon = styled.div`
 
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

export const CategoriesUploadText = styled.div`
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

export const CategoriesImagePreview = styled.div`
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

export const CategoriesRemoveLink = styled.a`
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
export const MediaButton = styled(MuiButton)<ButtonProps>`
  width: auto; 
  position: relative;
//   right: 20px;
  padding: 6px 16px;
  align-self: flex-end; 
  margin-top: 10px; 
  bottom: 35px;
  
`;