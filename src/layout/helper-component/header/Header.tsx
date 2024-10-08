import React, { useState } from "react";
import { Toolbar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import {
  AppBarWrapper,
  SubTileText,
  RightContainer,
  StyledSmallIcon,
  StyledLargeIcon,
  AdminTypo,
  LeftContainer,
  ToolBarBox,
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
    <AppBarWrapper>
      <ToolBarBox className="p-0">
        <LeftContainer>
          <IconButton edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <SubTileText>DASHBOARD</SubTileText>
        </LeftContainer>
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
              <KeyboardArrowDownIcon sx={{ color: "rgba(0, 0, 0, 0.5)", marginRight: "5px" }} />
              <AdminTypo
                variant="body1"
              >
                Administrator
              </AdminTypo>
              <IconButton>
                <StyledLargeIcon />
              </IconButton>
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
              horizontal: "left",
            }}
            PaperProps={{
              style: {
                marginTop: "-5px",
                height: "110px",
                width: "180px",
                border: "1px solid rgba(0, 0, 0, 0.15)"
              },
            }}
          >
            <MenuItem onClick={handleClose} style={{ fontSize: "20px", borderBottom: "1px solid rgba(0, 0, 0, 0.15)" }}>
              <FaUser style={{ marginRight: "8px", fontSize: "20px" }} /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ fontSize: "20px" }}>
              <FaEnvelope style={{ marginRight: "8px", fontSize: "20px" }} /> Logout
            </MenuItem>
          </Menu>
        </RightContainer>
      </ToolBarBox>
    </AppBarWrapper>
  );
};

export default Header;
