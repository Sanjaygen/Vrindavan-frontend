import breakpoints from "@/themes/breakpoints";
import { Paper, Table, TableContainer } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";

export const HeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  ${breakpoints.xs}{
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  ${breakpoints.sm}{
    flex-direction: row;
    align-items: center;
    gap: 0px;
  }
`;

export const LeftControls = styled('div')`
  display: flex;
  align-items: center;
  span{
    font-family: Poppins,sans-serif;
    font-size: 16px;
    color: #212529;
  }
  ${breakpoints.sm}{
    span{
      font-size: 12px;
    }
  }
  ${breakpoints.md}{
    span{
     font-size: 16px;
   }
 }
`;

export const RightControls = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 23px;
`;
export const PaginationContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const PaginationInfo = styled('div')`
  font-family: Poppins,sans-serif;
  font-size: 18px;
  ${breakpoints.xs}{
    font-size: 12px;
  }
  ${breakpoints.sm}{
    font-size: 12px;
  }
  ${breakpoints.md}{
    font-size: 16px;
  }
  ${breakpoints.lg}{
    font-size: 18px;
  }
`;

export const PaginationButtons = styled('div')`
  display: flex;
  align-items: center;
`;

export const PageButton = styled.button<{ active?: boolean; isRound?: boolean }>`
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: ${({ isRound }) => (isRound ? "50px" : "18px")};
  width: ${({ isRound }) => (isRound ? "30px" : "auto")};
  height: ${({ isRound }) => (isRound ? "30px" : "auto")};
  padding: ${({ isRound }) => (isRound ? "0" : "10px 15px")};
  background-color: ${({ active }) => (active ? "#007bff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
  &:hover {
    background-color: ${({ active }) => (active ? "#0056b3" : "#d0d0d0")};
  }
  ${breakpoints.xs}{
    font-size: 8px;
    width: ${({ isRound }) => (isRound ? "20px" : "auto")};
    height: ${({ isRound }) => (isRound ? "20px" : "auto")};
    padding: ${({ isRound }) => (isRound ? "0" : "5px 10px")};
  }
  ${breakpoints.sm}{
    font-size: 12px;
  }
  ${breakpoints.md}{
    font-size: 16px;
  }
  ${breakpoints.lg}{
    font-size: 18px;
    width: ${({ isRound }) => (isRound ? "30px" : "auto")};
    height: ${({ isRound }) => (isRound ? "30px" : "auto")};
    padding: ${({ isRound }) => (isRound ? "0" : "10px 15px")};
  }
`;
export const SearchContainer = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  ${breakpoints.sm}{
     width: 200px;
  }
  ${breakpoints.md}{
    width: 300px;
 }
`;

export const SearchInput = styled('input')`
  width: 100%; 
  border: none;
  outline: none;
  padding: 8px 30px 8px 8px;
  font-size: 14px;
  border-radius: 4px;
  ${breakpoints.sm}{
    font-size: 12px;
  }
  ${breakpoints.md}{
    font-size: 14px;
  }
`;

export const IconDiv = styled("div")`
   background-color: #e9ecef;
   padding: 10px;
   border-left: 1px solid #ccc;
`

export const SearchIcon = styled(FaSearch)`
  font-size: 18px;
  color: #888;
  cursor: pointer;
`;

export const TableContent = styled(Table)`
  max-height: 440px;
`
export const PaperContnent = styled(Paper)`
  width: 95.6%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  overflow: hidden;
  ${breakpoints.xs}{
    width: 89%;
    margin-left: 5%;
  }
  ${breakpoints.sm}{
    width: 95.6%;
    margin-left: 1.5%;
  }
`