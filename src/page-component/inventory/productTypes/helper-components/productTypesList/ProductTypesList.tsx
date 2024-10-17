import React from "react";
import CustomTables from "@/ui-components/CustomTables/CustomTables";
import {  ProductTypesColumns } from "@/config/Tables.config";
import { MainContainer, SubWrapper } from "@/page-component/inventory/products/helper-component/productList/ProductList.styled";
import styled from "styled-components";

interface ProductTypesListProps {
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

const ProductTypesList: React.FC<ProductTypesListProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const formattedProductTypesRow = [
    {
      id: 1,
      name: "Brand A",
      weightage: 10,
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
      weightage: 20,
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
  const columnsWithCustomRender = ProductTypesColumns.map((column) => {
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
        <CustomTables
          columns={columnsWithCustomRender}
          rows={formattedProductTypesRow}
          onEditClick={onEditClick}
          onDeleteClick={onDeleteClick}
        />
      </SubWrapper>
    </MainContainer>
  );
};

export default ProductTypesList;
