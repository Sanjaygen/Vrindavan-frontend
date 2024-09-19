// components/ButtonGroup.tsx
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegSave, FaPrint, FaUndo, FaEye, FaCheck } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { Button, Menu, MenuItem, MenuList } from "@mui/material";
import styled from "styled-components";

interface ButtonGroupProps {
  onExportClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorElExport: null | HTMLElement;
  onExportClose: () => void;
}

const ButtonGroupWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
  margin-right: 13px;
`;

const StyledButtons = styled(Button)`
  border: none !important;
  border-radius: 3px 3px 0px 0px !important;
  &:hover {
    border-top: 1px solid transparent !important;
    border-left: 1px solid transparent !important;
    border-right: 1px solid transparent !important;
    border-bottom: none;
  }
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 6px;
  font-size: 12px !important;
  min-width: auto;
  svg {
    font-size: 14px;
  }
`;

const ExportButton = styled(StyledButtons)`
  flex-direction: row-reverse;
  // gap: 10px;
`;

const ButtonGroup = ({
  onExportClick,
  anchorElExport,
  onExportClose,
}: ButtonGroupProps) => {
  const [anchorElColumn, setAnchorElColumn] = useState<null | HTMLElement>(
    null
  );

  const handleColumnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElColumn(event.currentTarget);
  };

  const handleColumnClose = () => {
    setAnchorElColumn(null);
  };

  return (
    <ButtonGroupWrapper>
      <ExportButton variant="outlined" onClick={onExportClick}>
        <IoMdArrowDropdown />
        Export
        <FaRegSave />
      </ExportButton>
      <Menu
        anchorEl={anchorElExport}
        open={Boolean(anchorElExport)}
        onClose={onExportClose}
      >
        <MenuList>
          <MenuItem>CSV</MenuItem>
          <MenuItem>Excel</MenuItem>
          <MenuItem>PDF</MenuItem>
        </MenuList>
      </Menu>

      <StyledButtons variant="outlined">
        <TbRefresh /> Refresh
      </StyledButtons>

      <StyledButtons variant="outlined">
        <FaPrint /> Print
      </StyledButtons>

      <StyledButtons variant="outlined">
        <FaUndo /> Reset
      </StyledButtons>

      <ExportButton variant="outlined" onClick={handleColumnClick}>
        <IoMdArrowDropdown />
        Column
        <FaEye />
      </ExportButton>

      <Menu
        anchorEl={anchorElColumn}
        open={Boolean(anchorElColumn)}
        onClose={handleColumnClose}
      >
        <MenuList>
          <MenuItem
            onClick={handleColumnClose}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FaCheck /> Name
          </MenuItem>
          <MenuItem
            onClick={handleColumnClose}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FaCheck /> Image
          </MenuItem>
          <MenuItem
            onClick={handleColumnClose}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FaCheck /> Weightage
          </MenuItem>
          <MenuItem
            onClick={handleColumnClose}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FaCheck /> Updated At
          </MenuItem>
          <MenuItem
            onClick={handleColumnClose}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FaCheck /> Actions
          </MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroupWrapper>
  );
};

export default ButtonGroup;
