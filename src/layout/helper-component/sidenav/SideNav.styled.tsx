
import breakpoints from "@/themes/breakpoints";
import Link from "next/link";
import { AiFillDashboard } from "react-icons/ai";
import { styled } from "styled-components";

interface DashButtonProps {
  href: string;
}
export const SideMenuWrapper = styled("div")`
  height: 95vh;
  z-index: 1;
  overflow-y: auto;
  background: none;
  border-right: none;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: none;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  scrollbar-width: none;
  scrollbar-color: none;

  a {
    width: 100%;
  }
`;
export const SubHead = styled('div')`
  font-family:Poppins;
  font-weight: 300 !important;
  font-size: 20px;
  color: black;
  left: 20px;
  position: relative;
  display: flex;
  ${breakpoints.xs}{
      font-size:15px;
  }
  ${breakpoints.lg}{
    font-size:20px;
  }
`;
export const ContentDiv = styled("div")`
  position: fixed;
  top: 0;
  height:65px;
  width:304px;
  background-color: #fff;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
  padding-top:10px;
  display: flex;
  align-items:center;
  img {
    height: 38px;
    width: 38px;
    margin-top: -4px;
    margin-right: 10px;
  }
  ${breakpoints.xs}{
    width:270px;
  }
  ${breakpoints.md}{
    width: 195px;
  }
  ${breakpoints.lg}{
    width: 270px;
  }
`;
export const DashButton = styled(Link) <DashButtonProps>`
  font-family:Poppins;
  font-weight: 400 !important;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 65px 0 0 0;
  top: 10px;
  position: relative;
  text-decoration: none;
  border-radius: 0px;
  background: none;
  color: #343A40;

  &:hover {
    background-color: #e2e6ea;
    color: #007bff;

    .dash-menu-icon {
      color: #007bff;
    }
  }

  .dash-menu-icon {
    font-size: 22px;
    margin-right: 20px;
    color: #343A40;
  }

  ${breakpoints.xs}{
    font-size:14px;
    .dash-menu-icon {
      font-size: 18px;
    }
  }
  ${breakpoints.lg}{
    font-size:18px;
    .dash-menu-icon {
      font-size: 22px;
    }
  }
`;

export const DashIcon = styled(AiFillDashboard)`
  font-size: 22px;
  margin-left: 23px;
  color: inherit; 
`;
