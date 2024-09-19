import breakpoints from "@/themes/breakpoints";
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
  width: 270px;
  height: 100vh;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  width: 304px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  left: 0;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.$isFirst ? "#007bff" : "none")};
  border: none;
  text-align: left;
  outline: none;
  color: ${(props) => (props.$isFirst ? "white" : "#343a40")};
  padding-right: 20px;

  &:hover {
    background-color: ${(props) => (props.$isFirst ? "#0056b3" : "#e9ecef")};
    color: ${(props) => (props.$isFirst ? "white" : "#007bff")};
  }

  &:active {
    background-color: ${(props) => (props.$isFirst ? "#003d7a" : "#ced4da")};
    color: ${(props) => (props.$isFirst ? "white" : "#007bff")};
  }

  .menu-label {
    flex-grow: 21;
    display: flex;
    align-items: center;
    font-family:Poppins;
    font-weight: 400 !important;
    font-size:18px;
  }

  .menu-icon {
    margin-left:10px;
    margin-right: 20px;
    font-size:25px;
  }
  ${breakpoints.xs}{
    width: 270px;
    .menu-label{
      font-size: 14px;
    }
    .menu-icon{
      font-size: 18px;
    }
  }
  ${breakpoints.lg}{
    width: 304px;
    .menu-label{
      font-size: 18px;
    }
    .menu-icon{
      font-size: 25px;
    }
  }
`;

export const SubMenuButton = styled(Link) <SubMenuButtonProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left:50px;
  margin: 5px 0;
  text-decoration: none;
  color: #343a40;
  font-family:Poppins;
  font-weight: 450 !important;
  font-size: 15px;
  border-radius: 0px;
  background: none;

  &:hover {
    background-color: #e2e6ea;
    color: #007bff;
    width: 330px;
  }

  .sub-menu-icon {
    margin-right: 20px;
    color: inherit;
  }

  ${breakpoints.xs}{
    font-size: 12px;
    &:hover{
      width: 270px;
    }
  }
  ${breakpoints.lg}{
    font-size: 15px;
    &:hover{
      width: 330px;
    }
  }
`;

export const SubMenu = styled.div<{ $isOpen: boolean }>`
  font-size: 16px;
  width:304px;
  max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  ${breakpoints.xs}{
    width: 270px;
  }
  ${breakpoints.lg}{
    width: 304px;
  }
`; 

export const AppTitle = styled("p")`
  font-family:Poppins;
  font-weight: 300 !important;
  font-size: 20px;
  font-size: 16.4px;
  margin-top: 20px;
  font-weight: 300;
  padding: 10px 1rem 0.5rem 1rem;
  ${breakpoints.xs}{
    font-size:15px;
  }
  ${breakpoints.lg}{
    font-size:20px;
  }
`;
