"use client";
import EditCategoriesComponent from '@/page-component/inventory/categories/helper-components/editCategories/EditCategories';
import { useParams } from 'next/navigation';
import React from "react";

const EditCategoriesPage = () => {
  const { categoriesId } = useParams<{ categoriesId: string }>(); 
  const categoriesIdNumber = Number(categoriesId);

  return (
    <div>
      <EditCategoriesComponent categoriesId={categoriesIdNumber} />
    </div>
  );
};

export default EditCategoriesPage;
