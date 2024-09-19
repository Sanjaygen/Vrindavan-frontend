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
import { useProducts } from "@/hooks/useProducts";
import EditProductPage from "@/app/products/edit/[productId]/page";
import { Column } from "@/types/inventory";
import CreateProductPage from "@/app/products/create/page";
import DeleteConfirmationDialog from "./helper-component/deleteProduct/DeleteProduct";

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
  const [activeTab, setActiveTab] = useState<string>("productList");
  const [productId, setProductId] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { data: products, isLoading, error } = useProducts() as any;

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/products/create");
    } else if (newTab === "productList") {
      router.push("/products");
    }
  };

  const handleEditClick = (id: string | number) => {
    const productIdNumber = typeof id === "string" ? Number(id) : id;
    setActiveTab("edit");
    router.push(`/products/edit/${productIdNumber}`);
  };

  const handleDeleteClick = (id: string | number) => {
    setProductId(typeof id === "string" ? id : String(id));
    setOpenDialog(true);
  };


  const tabsData = [
    {
      id: "productList",
      label: "Products List",
      icon: <AiOutlineUnorderedList />,
    },
    { id: "create", label: "Create Product", icon: <AiOutlinePlus /> },
  ];

  const columns: Column[] = [
    { id: "sno", label: "Sno.", accessor: "sno" },
    { id: "name", label: "Name", accessor: "name" },
    {
      id: "trackInventory",
      label: "Track Inventory",
      accessor: "trackInventory",
    },
    { id: "image", label: "Image", accessor: "image" },
    { id: "price", label: "Price", accessor: "price" },
    { id: "discountPrice", label: "Discount Price", accessor: "discountPrice" },
    { id: "totalProduct", label: "Total Product", accessor: "totalProduct" },
    { id: "stockUpdate", label: "Stock Update", accessor: "stockUpdate" },
    { id: "weightage", label: "Weightage", accessor: "weightage" },
    { id: "actions", label: "Actions", accessor: "actions" },
  ];

  const formattedProducts =
    products?.map((product: any, index: number) => ({
      sno: index + 1,
      name: product.name || "N/A",
      price: product.price || "N/A",
      discountPrice: product.discount_price || "N/A",
      image: product.image || "N/A",
      totalProduct: product.package_items_count || 0,
      stockUpdate: product.weight || "N/A",
      weightage: product.weightage || "N/A",
      id: product.id,
      actions: (
        <>
          <button onClick={() => handleEditClick(product.id)}>Edit</button>
          <button onClick={() => handleDeleteClick(product.id)}>Delete</button>
        </>
      ),
    })) || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

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
            rows={formattedProducts}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        </>
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
      <Header />
      <Breadcrumbs />
    </HeaderWrapper>
    <ProductTabs />
  </Container>
);

export default ProductComponent;
