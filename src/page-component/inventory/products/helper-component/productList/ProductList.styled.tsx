import breakpoints from "@/themes/breakpoints";
import styled from "styled-components";

export const MainContainer = styled('div')` 

`;
export const SubCointainer = styled('div')` 
 position: relative;
 margin-top: 20px;
 left: 40px;
 
${breakpoints.sm}{  
  left: 30px;
}
${breakpoints.md}{  
    left: 25px;
  }
  ${breakpoints.lg}{  
    left: 40px;
  }
`;
export const SubWrapper = styled('div')` 

`;