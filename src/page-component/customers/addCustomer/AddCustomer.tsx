'use client';
import HeaderContent from "@/ui-components/headContent/HeadContent";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineAdd } from "react-icons/md";
import TabsComponent from "@/ui-components/tabs/Tabs";
import { Container, ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import { CreateCustomerPage } from "@/app/customers/addCustomer/create/page";

const ProductTypesTab: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("create");


  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "create") {
      router.push("/customers/addCustomer/create");
    }
  };



  const tabsData = [
    { id: "create", label: "Create Customer", icon: <MdOutlineAdd /> },
  ];

  return (
    <ContentWrapper>
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={tabsData}
        renderExtraContent={(activeTab) => {
          console.log("Active Tab:", activeTab); 
          return null; 
        }}
      />

      {activeTab === "create" && <CreateCustomerPage />}

    </ContentWrapper>
  );
};

const AddCustomerComponent: React.FC = () => (
  <Container>
    <HeaderWrapper>
      <HeaderContent title="Add Customer" subtitle="Add Customer Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Add Customer", href: "/customers/addCustomer" },
          { label: "Create Customer" },
        ]}
      />
    </HeaderWrapper>
    <ProductTypesTab />
  </Container>
);

export default AddCustomerComponent;
