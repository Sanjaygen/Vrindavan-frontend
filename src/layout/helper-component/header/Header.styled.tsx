import breakpoints from "@/themes/breakpoints";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
// ( zindex: ${({ theme }) => theme.zIndex.drawer + 1}; )
export const AppBarWrapper = styled(Box)`
  z-index: 1201;
  background-color: white;
  box-shadow: none;
  left: 20%;
  height: 64px;
  width: 80%;
  top: 0%;
  padding: 0 20px;
  .MuiToolbar-root {
    padding: 0px;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  ${breakpoints.xs} {
    left: 0%;
    width: 100%;
  }
  ${breakpoints.md} {
    left: 0%;
    width: 100%;
  }
  ${breakpoints.lg} {
    left: 18%;
    width: 90%;
  }
  @media print {
    display: none;
  }
`;


export const IconMenuButton = styled(IconButton)`
  // display: none;

  @media (max-width: 959px) { 
    display: block;
  }

  @media (min-width: 960px) { 
    // display: none;
  }
`;


export const SubTileText = styled(Typography)`
  font-weight: 400;
   font-size: 1rem;
  font-display: swap; 
  color: rgba(0, 0, 0, 0.5);
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`;



// export const BoxWrapper = styled(Box)`
//     // flex-grow: 1;
// `;
export const RightContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 500px;
  gap: 16px;
  overflow: hidden;
  ${breakpoints.xs} {
    margin-left: auto;
  }
  ,
  ${breakpoints.md} {
    margin-left: auto;
  }
  ${breakpoints.lg} {
    margin-left: 800px;
  }
`;

export const StyledSmallIcon = styled.span`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
`;

export const StyledLargeIcon = styled(FaUserCircle)`
  font-size: 34px;
  margin-left: -20px;
  color: rgba(0, 0, 0, 0.5);
`;

export const MenuIconStyled = styled(MenuIcon)`
  cursor: pointer;
`;
