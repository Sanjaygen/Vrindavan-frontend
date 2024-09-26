// components/ButtonGroup.tsx
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegSave, FaPrint, FaUndo, FaEye, FaCheck } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { Button, Menu, MenuItem, MenuList } from "@mui/material";
import styled from "styled-components";
import breakpoints from "@/themes/breakpoints";

interface ButtonGroupProps {
  onExportClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorElExport: null | HTMLElement;
  onExportClose: () => void;
}

const ButtonGroupWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 70%;
  gap: 4px;
  margin-left: auto;
  margin-right: 13px;
  border-bottom: 1px solid #ccc;
  width: 50%;
  ${breakpoints.xs}{
    margin-top: 0px;
    padding: 0px;
    width: 90%;
    margin-left: 20px;
  }
  ${breakpoints.sm}{
    margin-top: 0px;
    padding: 10px;
  }
  ${breakpoints.lg}{
    margin-top: 0px;
    padding: 10px;
    width: 50%;
    margin-left: auto;
    margin-right: 13px;
  }
`;

const StyledButtons = styled(Button)`
  border: none !important;
  border-radius: 3px 3px 0px 0px !important;
  font-family: Poppins,sans-serif !important;
  color: #007BFF !important;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 6px;
  font-size: 16px !important;
  min-width: auto;
  svg {
    font-size: 14px;
  }
  &:hover {
    border-top: 1px solid lightgrey !important;
    border-left: 1px solid  lightgrey !important;
    border-right: 1px solid lightgrey  !important;
    border-bottom: none !important;
  }
  ${breakpoints.xs}{
    font-size: 10px !important;
    flex-direction: column;
  }
  ${breakpoints.sm}{
    font-size: 12px !important;
    flex-direction: row;
  }
  ${breakpoints.md}{
    font-size: 16px !important;
    flex-direction: row;
  }
`;

const ExportButton = styled(StyledButtons)`
  flex-direction: row-reverse;
  // gap: 10px;
  ${breakpoints.xs}{
    flex-direction: column-reverse;
  }
  ${breakpoints.sm}{
    flex-direction: row-reverse;
  }
`;

const IconSave = styled(FaRegSave)`
  margin-top: 20px;
  ${breakpoints.xs}{
    margin-top: 20px;
  }
  ${breakpoints.sm}{
    margin-top: 0px;
  }
`
const IconEye = styled(FaEye)`
  margin-top: 20px;
  ${breakpoints.xs}{
    margin-top: 20px;
  }
  ${breakpoints.sm}{
    margin-top: 0px;
  }
`

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
        <IoMdArrowDropdown/>
        Export
        <IconSave />
      </ExportButton>
      <Menu
        anchorEl={anchorElExport}
        open={Boolean(anchorElExport)}
        onClose={onExportClose}
      >
        <MenuList>
          <MenuItem
            onClick={onExportClose}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >CSV</MenuItem>
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
        <IconEye />
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
