import React, { useState } from "react";
import { Toolbar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import {
  AppBarWrapper,
  IconMenuButton,
  SubTileText,
  RightContainer,
  StyledSmallIcon,
  StyledLargeIcon,
} from "./Header.styled";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaShoppingCart, FaBell, FaUser, FaEnvelope } from "react-icons/fa";

interface HeaderProps {
  toggleDrawer: () => void;
}

const Header = ({ toggleDrawer }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarWrapper position="fixed">
      <Toolbar className="p-0">
        <IconMenuButton edge="start" onClick={toggleDrawer}>
          <MenuIcon />
        </IconMenuButton>
        <SubTileText>DASHBOARD</SubTileText>
        <RightContainer>
          <IconButton>
            <StyledSmallIcon>
              <FaShoppingCart />
            </StyledSmallIcon>
          </IconButton>
          <IconButton>
            <StyledSmallIcon>
              <FaBell />
            </StyledSmallIcon>
          </IconButton>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleMenuClick}
          >
            <KeyboardArrowDownIcon sx={{ color: "black" }} />
            <Typography
              variant="body1"
              style={{ marginRight: 8, color: "black" }}
            >
              Administrator
            </Typography>
          </div>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: {
                marginTop: "45px",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <FaUser style={{ marginRight: "8px" }} /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FaEnvelope style={{ marginRight: "8px" }} /> Logout
            </MenuItem>
          </Menu>
          <IconButton>
            <StyledLargeIcon />
          </IconButton>
        </RightContainer>
      </Toolbar>
    </AppBarWrapper>
  );
};

export default Header;
