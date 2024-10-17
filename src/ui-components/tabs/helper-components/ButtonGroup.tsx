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
  gap: 4px;
  margin-left: auto;
  margin-right: 13px;
   margin-top: -4px;
  border-bottom: 1px solid #ccc;
  // width: 50%;
  ${breakpoints.md}{ 
    display: flex;
  gap: 4px;
  margin-left: 260px;
  margin-right: 13px;
  margin-top: -45px;
  border-bottom: 0px solid #ccc;
  // width: 50%;
  }
  ${breakpoints.lg}{ 
  display: flex;
  gap: 4px;
  margin-left: auto;
  margin-right: 13px;
   margin-top: -8px;
  border-bottom: 1px solid #ccc;
  // width: 50%;
  }
    ${breakpoints['2xl']}{ 
  display: flex;
  gap: 4px;
  margin-left: auto;
  margin-right: 13px;
   margin-top: -15px;
  border-bottom: 1px solid #ccc;
  // width: 50%;
  }
`;

const StyledButtons = styled(Button)`
  border: none !important;
  border-radius: 3px 3px 0px 0px !important;
  font-family: Poppins,sans-serif !important;
  gap: 5px;
  padding: 2px 6px;
  font-size: 13px !important;
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
   ${breakpoints.md}{ 
 font-size: 12px !important;
 flex-direction: row;
 }
 ${breakpoints.lg}{ 
 font-size: 10px !important;
 }
  ${breakpoints['2xl']}{ 
 font-size: 14px !important;
 }
`;

const ExportButton = styled(StyledButtons)`
  flex-direction: row-reverse;
  // gap: 10px;
  ${breakpoints.lg}{ 
   flex-direction: row-reverse;
    }
`;

const IconSave = styled(FaRegSave)`
  margin-top: 0px;
  ${breakpoints.lg}{ 
   margin-top: 0px;
    }
`
const IconEye = styled(FaEye)`
  margin-top: 0px;
  
  ${breakpoints.lg}{ 
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
