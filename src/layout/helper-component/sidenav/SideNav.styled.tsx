import { Typography } from "@mui/material";
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
  font-size: 20px;
  color: black;
  left: 20px;
  position: relative;
  font-weight: 200;
  display: flex;
`;
export const ContentDiv = styled("div")`
  border-bottom: 1px solid #ccc;
  margin-top: 23px;
  display: flex;
  img {
    height: 38px;
    width: 38px;
    margin-top: -4px;
    margin-right: 10px;
  }
`;
export const DashButton = styled(Link)<DashButtonProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  top: 10px;
  position: relative;
  text-decoration: none;
  font-size: 16px;
  border-radius: 0px;
  background: none;
  color: #000000; /* Default black color */

  &:hover {
    background-color: #e2e6ea;
    color: #007bff; /* Change text color to blue on hover */

    .dash-menu-icon {
      color: #007bff; /* Change icon color to blue on hover */
    }
  }

  .dash-menu-icon {
    margin-right: 20px;
    color: #000000; /* Default black color for icon */
  }
`;

export const DashIcon = styled(AiFillDashboard)`
  font-size: 22px;
  margin-left: 23px;
  color: inherit; 
`;
