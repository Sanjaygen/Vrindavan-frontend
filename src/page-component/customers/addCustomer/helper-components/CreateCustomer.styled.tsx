import breakpoints from "@/themes/breakpoints";
import { styled } from "styled-components";

export const AddCustomerContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.md} {
    flex-direction: column;
  }
  ${breakpoints.lg} {
    gap: 30px;
  }
  ${breakpoints["2xl"]} {
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
export const AddCustomerFormGroup = styled.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: column;
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
  ${breakpoints["2xl"]} {
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    gap: 8px;
  }
`;
export const AddCustomerLabel = styled.label`
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
  ${breakpoints["2xl"]} {
    font-weight: bold;
    margin-right: 8px;
    min-width: 110px;
    text-align: right;
  }
`;
export const CustomWidth = styled.div`
  .width-alter {
    width: 100%;
    ${breakpoints.xs} {
      width: 350px;
    }
    ${breakpoints.md} {
      width: 650px;
    }
    ${breakpoints.lg} {
      width: 650px;
    }
    ${breakpoints["2xl"]} {
      width: 650px;
    }
  }
`;
export const StyledTextArea = styled.textarea`
  width: 650px;
  height: 120px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  overflow: auto;
  resize: vertical;
  ${breakpoints.xs} {
    width: 350px;
  }
  ${breakpoints.md} {
    width: 650px;
  }
  ${breakpoints.lg} {
    
  }
  ${breakpoints["xl"]} {
  
  }
  ${breakpoints["2xl"]} {
    
  }
`;
export const CustomDropdownPart = styled.div`
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
    ${breakpoints["xl"]} {
      right: 20px;
    }
    ${breakpoints["2xl"]} {
      right: 10px;
    }
  }
  .custom-width {
    width: 650px;
    ${breakpoints.xs} {
    width: 350px;
    }
    ${breakpoints.md} {
    width: 650px;
    }
    ${breakpoints.lg} {
    width: 650px;
    }
    ${breakpoints["xl"]} {
    width: 650px;
    }
    ${breakpoints["2xl"]} {
      width: 650px;
    }
  }
`;
