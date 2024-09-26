import breakpoints from "@/themes/breakpoints";
import { styled } from "styled-components";

export const MainTab = styled.div`
  display: flex;
   margin-right: 10px;
  margin-left: 10px;
  ${breakpoints.xs}{
    flex-direction: column;
  }
  ${breakpoints.lg}{
    flex-direction: row;
  }
`
export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  // margin-left:20px;
  width: 50%;
  ${breakpoints.xs}{
    width: 90%;
    border-bottom: none;
  }
  ${breakpoints.md}{
    width: 50%;
    border-bottom: 1px solid #ccc;
  }
`;

export const TabListItem = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  font-family: Poppins,sans-sereif;
  font-size: 16px;
  font-weight: 500;
  color: #007BFF;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: -1px;
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #007bff" : "none")};

  ${({ isActive }) =>
    isActive &&
    `
    background-color: white;
    color: #343A40;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  `}
  ${breakpoints.sm}{
    font-size: 12px;
  }
  ${breakpoints.md}{
    font-size: 16px;
  }
`;

export const TabIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 20px;
  margin-top:5px;
  ${breakpoints.sm}{
    font-size: 14px;
  }
  ${breakpoints.md}{
    font-size: 20px;
  }
`;

export const TabContent = styled.div`
  padding: 1rem;
  width: 100%;
  border-bottom: 2px solid black; 
`;