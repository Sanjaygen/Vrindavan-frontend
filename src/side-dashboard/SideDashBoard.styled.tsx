import Link from "next/link";
import { styled } from "styled-components";

interface MenuButtonProps {
  $isOpen: boolean;
  $isFirst: boolean; 
}

interface SubMenuButtonProps {
  href: string;
}

export const Sidebar = styled.div`
  width: 250px;
  height: 100vh;  
  padding: 0px;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  width: 277px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  left: 0;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.$isFirst ? '#007bff' : 'none')}; 
  border: none;
  text-align: left;
  outline: none;
  color: ${(props) => (props.$isFirst ? 'white' : '#343a40')}; 
  padding-right: 20px; 

  &:hover {
    background-color: ${(props) => (props.$isFirst ? '#0056b3' : '#e9ecef')};  
    color: ${(props) => (props.$isFirst ? 'white' : '#007bff')}; 
  }

  &:active {
    background-color: ${(props) => (props.$isFirst ? '#003d7a' : '#ced4da')};  
    color: ${(props) => (props.$isFirst ? 'white' : '#007bff')}; 
  }

  .menu-label {
    flex-grow: 21; 
    display: flex;
    align-items: center;
  }

  .menu-icon {
    margin-right: 10px; 
  }
`;

export const SubMenuButton = styled(Link)<SubMenuButtonProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  text-decoration: none;
  color: #343a40; // Default color
  font-size: 16px;
  border-radius: 0px;
  background: none; 

  &:hover {
    background-color: #e2e6ea;
    color: #007bff; 
  }

  .sub-menu-icon {
    margin-right: 20px;
    color: inherit; 
  }
`;

export const SubMenu = styled.div<{ $isOpen: boolean }>`
  padding-left: 20px;
  width: 250px !important;
  font-size: 16px;
  max-height: ${(props) => (props.$isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

export const AppTitle = styled('p')` 
  font-size: 1rem;
  margin-top: 20px;
  margin-left:20px;
  font-weight: 300;
`;
