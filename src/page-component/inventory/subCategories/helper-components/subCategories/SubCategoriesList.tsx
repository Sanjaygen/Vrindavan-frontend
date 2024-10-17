import React from "react";
import {  SubCategoriesProps} from "@/service/types";
import CustomTables from "@/ui-components/CustomTables/CustomTables";
import {SubCategoriesColumns} from "@/config/Tables.config";
import { MainContainer, SubWrapper } from "@/page-component/inventory/products/helper-component/productList/ProductList.styled";
import { differenceInMonths, formatDistanceToNowStrict } from "date-fns";
import { useSubCategories } from "@/hooks/useSubCategories";


interface CategoriesListProps {
  onEditClick: (id: string | number) => void;
  onDeleteClick: (id: string | number) => void;
}

const SubCategoriesList: React.FC<CategoriesListProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const { data, isLoading, error } = useSubCategories();
  console.log("SubCategories data:", data);
  const subCategoriesData = data?.data || []; 
  const formattedSubCategories =
  Array.isArray(subCategoriesData) ?
  subCategoriesData.map((subCategory: SubCategoriesProps) => {
    const updatedAt = subCategory.updated_at
      ? new Date(subCategory.updated_at)
      : null;

    let displayDate = "N/A";
    if (updatedAt && !isNaN(updatedAt.getTime())) {
      const monthsDifference = differenceInMonths(new Date(), updatedAt);
      displayDate =
        monthsDifference >= 12
          ? `${Math.floor(monthsDifference / 12)} years ago`
          : formatDistanceToNowStrict(updatedAt, { addSuffix: true });
    }

    return {
        id: subCategory.id, 
        category_name: subCategory.category_name || "N/A",
        name: subCategory.name || "N/A",
        image: subCategory.image || "N/A",
        weightage: subCategory.weightage || "N/A",
        updated_at: displayDate,
      actions: (
        <>
          <button onClick={() => onEditClick(subCategory.id)}>Edit</button>
          <button onClick={() => onDeleteClick(subCategory.id)}>Delete</button>
        </>
      ),
    };
  }) : [];
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;


  return (
    <MainContainer>
      <SubWrapper>
      <CustomTables
        columns={SubCategoriesColumns}
        rows={formattedSubCategories}
        onEditClick={onEditClick}  
        onDeleteClick={onDeleteClick} 
      />
      </SubWrapper>
    </MainContainer>
  );
};

export default SubCategoriesList;
