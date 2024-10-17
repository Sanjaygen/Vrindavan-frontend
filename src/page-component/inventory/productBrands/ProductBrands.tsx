import HeaderContent from "@/ui-components/headContent/HeadContent";
import { Container, ContentWrapper, HeaderWrapper } from "../products/Product.styled";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import TabsComponent from "@/ui-components/tabs/Tabs";
import ButtonGroup from "@/ui-components/tabs/helper-components/ButtonGroup";
import CreateProductBrandsPage from "@/app/inventory/productBrands/create/page";
import EditProductBrandsPage from "@/app/inventory/productBrands/edit/[productbrandsId]/page";
import ProductBrandsList from "./helper-components/productBrandList/ProductBrandList";
import DeleteCategories from "../categories/helper-components/deleteCategories/DeleteCategories";


const ProductBrandsTab: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("productBrands");
  const [productbrandsId, SetProductbrandsId] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/inventory/productBrands/create");
    } else if (newTab === "productBrands") {
      router.push("/inventory/productBrands");
    }
  };

  const handleEditClick = (id: string | number) => {
    const productbrandsIdNumber = typeof id === "string" ? Number(id) : id;
    setActiveTab("edit");
    SetProductbrandsId(String(productbrandsIdNumber));
    router.push(`/inventory/productBrands/edit/${productbrandsIdNumber}`);
  };

  const handleDeleteClick = (id: string | number) => {
    SetProductbrandsId(String(id));
    console.log("Delete Clicked", id);
    setOpenDialog(true);
  };

  const tabsData = [
    {
      id: "productBrands",
      label: "ProductBrands",
      icon: <AiOutlineUnorderedList />,
    },
    { id: "create", label: "Create ProductBrands", icon: <MdOutlineAdd /> },
  ];

  return (
    <ContentWrapper>
       <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={tabsData}
        renderExtraContent={(activeTab) => {
          console.log("Active Tab:", activeTab); 
          return activeTab === "productBrands" ? (
            <ButtonGroup
              onExportClick={() => console.log("Export Clicked")}
              anchorElExport={null}
              onExportClose={() => console.log("Export Closed")}
            />
          ) : null;
        }}
      />

      {activeTab === "productBrands" && (
        <ProductBrandsList
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {activeTab === "create" && <CreateProductBrandsPage />}

      {activeTab === "edit" && productbrandsId && <EditProductBrandsPage/>}

      <DeleteCategories
        open={openDialog}
        onClose={() => setOpenDialog(false)} categoriesId={null}        
      />
    </ContentWrapper>
  );
};
const ProductBrandsComponent: React.FC = () => (
  
  <Container>
    <HeaderWrapper>
    <HeaderContent title="ProductBrands" subtitle="ProductBrands Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "ProductBrands", href: "/inventory/productBrands" },
          { label: "ProductBrands List" },
        ]}
      />
    </HeaderWrapper>
    <ProductBrandsTab/>
  </Container>
);

export default ProductBrandsComponent;
