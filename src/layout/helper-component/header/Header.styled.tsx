import breakpoints from "@/themes/breakpoints";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
// ( zindex: ${({ theme }) => theme.zIndex.drawer + 1}; )
export const AppBarWrapper = styled(Box)`
  box-shadow: none;
  height: 65px;
  padding: 4px 20px;
  .MuiToolbar-root {
    padding: 0px;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-bottom: 1px solid #ccc;

  ${breakpoints.xs} {
    left: 0%;
    width: 100%;
  }
  ${breakpoints.md} {
    left: 0%;
    width: 100%;
  }
  ${breakpoints.lg} {
    right:0px;
    left: 18%;
    width: 100%;
  }
  @media print {
    display: none;
  }
`;

export const IconMenu = styled(MenuIcon)`
    margin-left:15px;
    ${breakpoints.xs}{
       margin-left:0px;
    }
    ${breakpoints.lg}{
      margin-left:15px;
   }
`


export const SubTileText = styled(Typography)`
  font-family:Poppines,sans-serif;
  font-weight: 400;
  font-size: 1rem;
  font-display: swap; 
  color: rgba(0, 0, 0, 0.5);
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left:20px;
  ${breakpoints.xs}{
    display:none;
  }
  ${breakpoints.sm}{
    display:block; 
  }
`;

export const RightContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 500px;
  gap: 16px;
  overflow: hidden;
  ${breakpoints.xs} {
    margin-left: 40px;
  }
  ${breakpoints.sm} {
    margin-left: 290px;
  }
  ${breakpoints.md} {
    margin-left: auto;
  }
  ${breakpoints.lg} {
    margin-left: 790px;
  }
  ${breakpoints.xl}{
    margin-left: 660px;
  }
`;

export const StyledSmallIcon = styled.span`
  font-size: 20px;
  margin-left:10px;
  color: rgba(0, 0, 0, 0.5);
  ${breakpoints.xs} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
`;

export const AdminTypo = styled(Typography)`
  margin-right: 8px;
  font-family:Poppines,sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5); 
  font-size: 20px;
  ${breakpoints.xs} {
    font-size: 14px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
`

export const StyledLargeIcon = styled(FaUserCircle)`
  font-size: 45px;
  margin-left: 0px;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 50%;
  ${breakpoints.xs} {
    font-size: 25px;
  }
  ${breakpoints.lg} {
    font-size: 45px;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  cursor: pointer;
`;
