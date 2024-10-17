'use client';
import HeaderContent from "@/ui-components/headContent/HeadContent";
import { Container, ContentWrapper, HeaderWrapper } from "../products/Product.styled";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import TabsComponent from "@/ui-components/tabs/Tabs";
import ButtonGroup from "@/ui-components/tabs/helper-components/ButtonGroup";
import DeleteCategories from "../categories/helper-components/deleteCategories/DeleteCategories";
import CreateProductTypesPage from "@/app/inventory/productTypes/create/page";
import ProductTypesList from "./helper-components/productTypesList/ProductTypesList";
import EditProductTypesPage from "@/app/inventory/productTypes/edit/[producttypesId]/page";


const ProductTypesTab: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("productTypes");
  const [producttypesId, SetProducttypesId] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/inventory/productTypes/create");
    } else if (newTab === "productTypes") {
      router.push("/inventory/productTypes");
    }
  };

  const handleEditClick = (id: string | number) => {
    const producttypesIdNumber = typeof id === "string" ? Number(id) : id;
    setActiveTab("edit");
    SetProducttypesId(String(producttypesIdNumber));
    router.push(`/inventory/productTypes/edit/${producttypesIdNumber}`);
  };

  const handleDeleteClick = (id: string | number) => {
    SetProducttypesId(String(id));
    console.log("Delete Clicked", id);
    setOpenDialog(true);
  };

  const tabsData = [
    {
      id: "productTypes",
      label: "ProductTypes",
      icon: <AiOutlineUnorderedList />,
    },
    { id: "create", label: "Create ProductTypes", icon: <MdOutlineAdd /> },
  ];

  return (
    <ContentWrapper>
       <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={tabsData}
        renderExtraContent={(activeTab) => {
          console.log("Active Tab:", activeTab); 
          return activeTab === "productTypes" ? (
            <ButtonGroup
              onExportClick={() => console.log("Export Clicked")}
              anchorElExport={null}
              onExportClose={() => console.log("Export Closed")}
            />
          ) : null;
        }}
      />

      {activeTab === "productTypes" && (
        <ProductTypesList
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {activeTab === "create" && <CreateProductTypesPage />}

      {activeTab === "edit" && producttypesId && <EditProductTypesPage/>}

      <DeleteCategories
        open={openDialog}
        onClose={() => setOpenDialog(false)} categoriesId={null}        
      />
    </ContentWrapper>
  );
};
const ProductTypesComponent: React.FC = () => (
  
  <Container>
    <HeaderWrapper>
    <HeaderContent title="Product Types" subtitle="Product Types Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "ProductTypes", href: "/inventory/productTypes" },
          { label: "ProductTypes List" },
        ]}
      />
    </HeaderWrapper>
    <ProductTypesTab/>
  </Container>
);

export default ProductTypesComponent;
