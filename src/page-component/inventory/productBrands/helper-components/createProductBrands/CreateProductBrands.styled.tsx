import breakpoints from "@/themes/breakpoints";
import { styled } from "styled-components";

export const ProductBrandsContainer = styled.div`
 margin-top: 30px;
  display: flex;
  flex-direction: column; 
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
  flex-direction: column; 
  gap: 20px; 
  justify-content: space-between; 
  margin-bottom: 20px;
  max-width: 1200px; 
  width: 100%; 
    }
`;
export const  ProductBrandsFormGroup = styled.div`
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
export const ProductBrandsLabel = styled.label`
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
export  const ProductBrandsHelperDiv = styled.div`
 display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const ProductBrandsHelperText = styled.span`
  
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
export const ProductBrandsCheckboxItem = styled.div`
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