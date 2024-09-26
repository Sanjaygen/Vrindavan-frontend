import React from "react";
import { useProducts } from "@/hooks/useProducts";
import { ProductProps } from "@/service/types";
import StockUpdate from "../stockUpdate/StockUpdate";
import SmallCard from "../productCard/ProductCard";
import CustomTables from "@/ui-components/CustomTables/CustomTables";
import { ProductsColumns } from "@/config/Tables.config";
import { MainContainer, SubCointainer, SubWrapper } from "./ProductList.styled";

interface ProductListProps {
  onEditClick: (id: string | number) => void;
  onDeleteClick: (id: string | number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const { data: products, isLoading, error } = useProducts();

  const formattedProducts =
    products?.foods?.map((product: ProductProps, index: number) => ({
      sno: index + 1,
      name: product.name || "N/A",
      trackInventory: product.track_inventory || "N/A",
      image: product.image || "N/A",
      price: product.price || "N/A",
      discountPrice: product.discount_price || "N/A",
      totalProduct: product.package_items_count || 0,
      stockUpdate: (
        <StockUpdate
          initialValue={product.weight ? Number(product.weight) : 0}
          onUpdate={(newQuantity) => {
            console.log(`Updated stock for ${product.id} to ${newQuantity}`);
          }}
        />
      ),
      unitSize: product.unit || "N/A",
      weightage: product.weightage || "N/A",
      id: product.id,
      actions: (
        <>
          <button onClick={() => onEditClick(product.id)}>Edit</button>
          <button onClick={() => onDeleteClick(product.id)}>Delete</button>
        </>
      ),
    })) || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <MainContainer>
        <SubCointainer>
      <SmallCard />
      </SubCointainer>
      <br/>
      <SubWrapper>
      <CustomTables
        columns={ProductsColumns}
        rows={formattedProducts}
        onEditClick={onEditClick}  
        onDeleteClick={onDeleteClick} 
      />
      </SubWrapper>
    </MainContainer>
  );
};

export default ProductList;
