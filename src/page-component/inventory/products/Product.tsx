import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import CreateProductPage from "@/app/inventory/products/create/page";
import EditProductPage from "@/app/inventory/products/edit/[productId]/page";
import ProductList from "./helper-component/productList/ProductList";
import DeleteConfirmationDialog from "./helper-component/deleteProduct/DeleteProduct";
import TabsComponent from "@/ui-components/tabs/Tabs";
import { Container, ContentWrapper, HeaderWrapper } from "./Product.styled";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";

const ProductTabs: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("productList");
  const [productId, setProductId] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/inventory/products/create");
    } else if (newTab === "productList") {
      router.push("/inventory/products");
    }
  };

  const handleEditClick = (id: string | number) => {
    const productIdNumber = typeof id === "string" ? Number(id) : id;
    setActiveTab("edit");
    setProductId(String(productIdNumber));
    router.push(`/inventory/products/edit/${productIdNumber}`);
  };

  const handleDeleteClick = (id: string | number) => {
    setProductId(String(id));
    setOpenDialog(true);
  };

  const tabsData = [
    {
      id: "productList",
      label: "Products List",
      icon: <AiOutlineUnorderedList />,
    },
    { id: "create", label: "Create Product", icon: <MdOutlineAdd /> },
  ];

  return (
    <ContentWrapper>
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={tabsData}
      />

      {activeTab === "productList" && (
        <ProductList
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {activeTab === "create" && <CreateProductPage />}

      {activeTab === "edit" && productId && <EditProductPage />}

      <DeleteConfirmationDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        productId={productId}
      />
    </ContentWrapper>
  );
};
const ProductComponent: React.FC = () => (
  
  <Container>
    <HeaderWrapper>
    <HeaderContent title="Products" subtitle="Products Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Products", href: "/inventory/products" },
          { label: "Products List" },
        ]}
      />
    </HeaderWrapper>
    <ProductTabs />
  </Container>
);

export default ProductComponent;

