import React from "react";
import { CategoriesProps} from "@/service/types";
import CustomTables from "@/ui-components/CustomTables/CustomTables";
import { CategoriesColumns} from "@/config/Tables.config";
import { MainContainer, SubWrapper } from "@/page-component/inventory/products/helper-component/productList/ProductList.styled";
import { useCategories } from "@/hooks/useCategories";
import { differenceInMonths, formatDistanceToNowStrict } from "date-fns";


interface CategoriesListProps {
  onEditClick: (id: string | number) => void;
  onDeleteClick: (id: string | number) => void;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const { data: categoriesItem, isLoading, error } = useCategories();
  console.log("ddd",categoriesItem);
  
   const formattedCategories =
   categoriesItem?.map((category: CategoriesProps) => {
    const updatedAt = category.updated_at ? new Date(category.updated_at) : null;

    let displayDate = "N/A"; 
    if (updatedAt && !isNaN(updatedAt.getTime())) { 
      const monthsDifference = differenceInMonths(new Date(), updatedAt);
      displayDate =
        monthsDifference >= 12
          ? `${Math.floor(monthsDifference / 12)} years ago`
          : formatDistanceToNowStrict(updatedAt, { addSuffix: true });
    }

      return {
        name: category.name || "N/A",
        image: category.image || "N/A",
        weightage: category.weightage || "N/A",
        updated_at: displayDate,
        id: category.id,
        actions: (
          <>
            <button onClick={() => onEditClick(category.id)}>Edit</button>
            <button onClick={() => onDeleteClick(category.id)}>Delete</button>
          </>
        ),
      };
    }) || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;


  return (
    <MainContainer>
      <SubWrapper>
      <CustomTables
        columns={CategoriesColumns}
        rows={formattedCategories}
        onEditClick={onEditClick}  
        onDeleteClick={onDeleteClick} 
      />
      </SubWrapper>
    </MainContainer>
  );
};

export default CategoriesList;
