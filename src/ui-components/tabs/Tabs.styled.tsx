import { styled } from "styled-components";

export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

export const TabListItem = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: -1px;
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #007bff" : "none")};

  ${({ isActive }) =>
    isActive &&
    `
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  `}
`;

export const TabIcon = styled.span`
  margin-right: 0.5rem;
`;

export const TabContent = styled.div`
  padding: 1rem;
  width: 100%;
  border-bottom: 2px solid black;
`;