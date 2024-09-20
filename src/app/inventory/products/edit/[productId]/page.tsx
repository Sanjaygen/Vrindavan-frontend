"use client";
import { useParams } from 'next/navigation';
import EditProductComponent from "@/page-component/inventory/products/helper-component/editProduct/EditProduct";
import React from "react";

const EditProductPage = () => {
  const { productId } = useParams<{ productId: string }>(); 
  const productIdNumber = Number(productId);

  return (
    <div>
      <EditProductComponent productId={productIdNumber} />
    </div>
  );
};

export default EditProductPage;
