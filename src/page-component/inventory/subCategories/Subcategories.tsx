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
import SubCategoriesList from "./helper-components/subCategories/SubCategoriesList";
import CreateSubCategoriesPage from "@/app/inventory/subCategories/create/page";
import EditSubCategoriesPage from "@/app/inventory/subCategories/edit/[subcategoriesId]/page";


const CategoriesTab: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("subcategoriesList");
  const [subCategoriesId, SetSubCategoriesId] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/inventory/subCategories/create");
    } else if (newTab === "subcategoriesList") {
      router.push("/inventory/subCategories");
    }
  };

  const handleEditClick = (id: string | number) => {
    const subCategoriesIdNumber = typeof id === "string" ? Number(id) : id;
    setActiveTab("edit");
    SetSubCategoriesId(String(subCategoriesIdNumber));
    router.push(`/inventory/subCategories/edit/${subCategoriesIdNumber}`);
  };

  const handleDeleteClick = (id: string | number) => {
    SetSubCategoriesId(String(id));
    console.log("Delete Clicked", id);
    setOpenDialog(true);
  };

  const tabsData = [
    {
      id: "subcategoriesList",
      label: "SubCategories List",
      icon: <AiOutlineUnorderedList />,
    },
    { id: "create", label: "Create SubCategories", icon: <MdOutlineAdd /> },
  ];

  return (
    <ContentWrapper>
       <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={tabsData}
        renderExtraContent={(activeTab) => {
          console.log("Active Tab:", activeTab); 
          return activeTab === "subcategoriesList" ? (
            <ButtonGroup
              onExportClick={() => console.log("Export Clicked")}
              anchorElExport={null}
              onExportClose={() => console.log("Export Closed")}
            />
          ) : null;
        }}
      />

      {activeTab === "subcategoriesList" && (
        <SubCategoriesList
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {activeTab === "create" && <CreateSubCategoriesPage />}

      {activeTab === "edit" && subCategoriesId && <EditSubCategoriesPage/>}

      {/* <DeleteCategories
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        subCategoriesId={subCategoriesId}
      /> */}
    </ContentWrapper>
  );
};
const SubcategoriesComponents: React.FC = () => (
  
  <Container>
    <HeaderWrapper>
    <HeaderContent title="SubCategories" subtitle="SubCategories Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "SubCategories", href: "/inventory/subCategories" },
          { label: "SubCategories List" },
        ]}
      />
    </HeaderWrapper>
    <CategoriesTab/>
  </Container>
);

export default SubcategoriesComponents;
