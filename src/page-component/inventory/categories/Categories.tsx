import HeaderContent from "@/ui-components/headContent/HeadContent";
import { Container, ContentWrapper, HeaderWrapper } from "../products/Product.styled";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import TabsComponent from "@/ui-components/tabs/Tabs";
import ButtonGroup from "@/ui-components/tabs/helper-components/ButtonGroup";
import DeleteCategories from "./helper-components/deleteCategories/DeleteCategories";
import CreateCategoriesPage from "@/app/inventory/categories/create/page";
import EditCategoriesPage from "@/app/inventory/categories/edit/[categoriesId]/page";
import CategoriesList from "./helper-components/categoriesList/CategoriesList";

const CategoriesTab: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("categoriesList");
  const [categoriesId, SetCategoriesId] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/inventory/categories/create");
    } else if (newTab === "categoriesList") {
      router.push("/inventory/categories");
    }
  };

  const handleEditClick = (id: string | number) => {
    const categoriesIdNumber = typeof id === "string" ? Number(id) : id;
    setActiveTab("edit");
    SetCategoriesId(String(categoriesIdNumber));
    router.push(`/inventory/categories/edit/${categoriesIdNumber}`);
  };

  const handleDeleteClick = (id: string | number) => {
    SetCategoriesId(String(id));
    console.log("Delete Clicked", id);
    setOpenDialog(true);
  };

  const tabsData = [
    {
      id: "categoriesList",
      label: "Categories List",
      icon: <AiOutlineUnorderedList />,
    },
    { id: "create", label: "Create Categories", icon: <MdOutlineAdd /> },
  ];

  return (
    <ContentWrapper>
       <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={tabsData}
        renderExtraContent={(activeTab) => {
          console.log("Active Tab:", activeTab); 
          return activeTab === "categoriesList" ? (
            <ButtonGroup
              onExportClick={() => console.log("Export Clicked")}
              anchorElExport={null}
              onExportClose={() => console.log("Export Closed")}
            />
          ) : null;
        }}
      />

      {activeTab === "categoriesList" && (
        <CategoriesList
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {activeTab === "create" && <CreateCategoriesPage />}

      {activeTab === "edit" && categoriesId && <EditCategoriesPage/>}

      <DeleteCategories
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        categoriesId={categoriesId}
      />
    </ContentWrapper>
  );
};
const CategoriesComponent: React.FC = () => (
  
  <Container>
    <HeaderWrapper>
    <HeaderContent title="Categories" subtitle="Categories Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Categories", href: "/inventory/categories" },
          { label: "Categories List" },
        ]}
      />
    </HeaderWrapper>
    <CategoriesTab/>
  </Container>
);

export default CategoriesComponent;
