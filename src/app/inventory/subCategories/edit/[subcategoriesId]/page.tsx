"use client";
import EditSubCategoriesComponent from '@/page-component/inventory/subCategories/helper-components/editSubCategories/EditSubCategories';
import { useParams } from 'next/navigation';
import React from "react";

const EditSubCategoriesPage = () => {
  const { subCategoriesId } = useParams<{ subCategoriesId: string }>(); 
  const subCategoriesIdIdNumber = Number(subCategoriesId);

  return (
    <div>
      <EditSubCategoriesComponent subCategoriesId={subCategoriesIdIdNumber} />
    </div>
  );
};

export default EditSubCategoriesPage;
