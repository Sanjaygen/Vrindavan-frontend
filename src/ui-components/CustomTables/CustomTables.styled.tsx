import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";

export const HeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const LeftControls = styled('div')`
  display: flex;
  align-items: center;
`;

export const RightControls = styled('div')`
  display: flex;
  align-items: center;
`;
export const PaginationContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const PaginationInfo = styled('div')`
  font-size: 14px;
`;

export const PaginationButtons = styled('div')`
  display: flex;
  align-items: center;
`;

export const PageButton = styled.button<{ active?: boolean; isRound?: boolean }>`
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: ${({ isRound }) => (isRound ? "50%" : "8px")};
  width: ${({ isRound }) => (isRound ? "30px" : "auto")};
  height: ${({ isRound }) => (isRound ? "30px" : "auto")};
  padding: ${({ isRound }) => (isRound ? "0" : "5px 15px")};
  background-color: ${({ active }) => (active ? "#007bff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
  &:hover {
    background-color: ${({ active }) => (active ? "#0056b3" : "#d0d0d0")};
  }
`;
export const SearchContainer = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  width: 200px;
`;

export const SearchInput = styled('input')`
  width: 100%;
  border: none;
  outline: none;
  padding: 8px 30px 8px 8px;
  font-size: 14px;
  border-radius: 4px;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 40px;
  font-size: 18px;
  color: #888;
  cursor: pointer;
`;