import React from "react";
import CustomTables from "@/ui-components/CustomTables/CustomTables";
import {  DeliveryAddressesColumns,} from "@/config/Tables.config";
import { MainContainer, SubWrapper } from "@/page-component/inventory/products/helper-component/productList/ProductList.styled";
import styled from "styled-components";


interface DeliveryListProps {
  onEditClick: (id: string | number) => void;
  onDeleteClick: (id: string | number) => void;
}

// Styled component for active status
const ActiveStatus = styled.span<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "green" : "red")};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: lowercase;
  font-size: 12px;
`;

const DeliveryAddressesList: React.FC<DeliveryListProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const formattedDeliveryRow = [
    {
      id: 1,
      name: "Brand A",
      mobileno: 6380804401,
      addresses:"Kodigehall main road, Ayyappanagar, K R Puram, Bangalore - 560036",
      date:"Dec24, 2022 11:11 Am",
      active: true, // Boolean value for active status
      actions: (
        <>
          <button onClick={() => onEditClick(1)}>Edit</button>
          <button onClick={() => onDeleteClick(1)}>Delete</button>
        </>
      ),
    },
    {
      id: 2,
      name: "Brand B",
      mobileno: 6380804401,
      addresses:"Kodigehall main road, Ayyappanagar, K R Puram, Bangalore - 560036",
      date:"Dec24, 2022 11:11 Am",
      active: false, // Inactive brand
      actions: (
        <>
          <button onClick={() => onEditClick(2)}>Edit</button>
          <button onClick={() => onDeleteClick(2)}>Delete</button>
        </>
      ),
    },
  ];

  // Update the columns to include the custom cell renderer for the active field
  const columnsWithCustomRender = DeliveryAddressesColumns.map((column) => {
    if (column.accessor === "active") {
      return {
        ...column,
        Cell: ({ value }: { value: boolean }) => (
          <ActiveStatus active={value}>{value ? "yes" : "no"}</ActiveStatus>
        ),
      };
    }
    return column;
  });

  return (
    <MainContainer>
      <SubWrapper>
        {/* <div>
        <FormControl
            variant="outlined"
            size="small"
            style={{ minWidth: 120}}
          >
            <Select
            //   value={}
            //   onChange={}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem>All</MenuItem>
              <MenuItem>Yes</MenuItem>
              <MenuItem>No</MenuItem>
            </Select>
          </FormControl>
        </div> */}
        <CustomTables
          columns={columnsWithCustomRender}
          rows={formattedDeliveryRow}
          onEditClick={onEditClick}
          onDeleteClick={onDeleteClick}
        />
      </SubWrapper>
    </MainContainer>
  );
};

export default DeliveryAddressesList;
