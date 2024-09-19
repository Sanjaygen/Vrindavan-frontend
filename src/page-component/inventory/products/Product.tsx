import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AiFillDashboard,
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai"; 
import CustomTables from "@/ui-components/CustomTables/CustomTables";
import ButtonGroup from "@/ui-components/tabs/helper-components/ButtonGroup";
import TabsComponent from "@/ui-components/tabs/Tabs"; 
import { columns, rows } from "../../../config/Tables.config";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  ContentWrapper,
  HeaderTitle,
  HeaderWrapper,
  IconWrapper,
} from "./Product.styled";
import CreateProduct from "./helper-component/createProduct/CreateProduct";
import EditProductComponent from "./helper-component/editProduct/EditProduct";

const Header: React.FC = () => (
  <HeaderTitle>Products | Products Management</HeaderTitle>
);

const Breadcrumbs: React.FC = () => (
  <BreadcrumbContainer>
    <BreadcrumbItem>
      <IconWrapper>
        <AiFillDashboard />
      </IconWrapper>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>Products List</BreadcrumbItem>
  </BreadcrumbContainer>
);

const ProductTabs: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("productList");
  const [productId, setProductId] = useState<string | null>(null);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/products/create");
    } else if (newTab === "productList") {
      router.push("/products");
    }
  };

  const handleEditClick = (id: string | number) => {
    setProductId(id.toString());
    setActiveTab("edit");
    router.push(`/products/edit/${id}`);
  };

  const tabsData = [
    { id: "productList", label: "Products List", icon: <AiOutlineUnorderedList /> },
    { id: "create", label: "Create Product", icon: <AiOutlinePlus /> },
  ];

  return (
    <ContentWrapper>
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={tabsData}
      />

      {activeTab === "productList" && (
        <>
          <ButtonGroup
            onExportClick={() => console.log("Export Clicked")}
            anchorElExport={null}
            onExportClose={() => console.log("Export Closed")}
          />
          <CustomTables
            columns={columns}
            rows={rows}
            onEditClick={handleEditClick}
          />
        </>
      )}

      {activeTab === "create" && (
        <div>
          <CreateProduct />
        </div>
      )}

      {activeTab === "edit" && productId && (
        <div>
          <EditProductComponent productId={productId} />
        </div>
      )}
    </ContentWrapper>
  );
};

const ProductComponent: React.FC = () => (
  <Container>
    <HeaderWrapper>
      <Header />
      <Breadcrumbs />
    </HeaderWrapper>
    <ProductTabs />
  </Container>
);

export default ProductComponent;
