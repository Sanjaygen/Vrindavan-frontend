'use client';
import HeaderContent from "@/ui-components/headContent/HeadContent";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUnorderedList } from "react-icons/ai";
import TabsComponent from "@/ui-components/tabs/Tabs";
import ButtonGroup from "@/ui-components/tabs/helper-components/ButtonGroup";
import DeleteCategories from "@/page-component/inventory/categories/helper-components/deleteCategories/DeleteCategories";
import { Container, ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import EditDeliveryAddressesPage from "@/app/customers/deliveryAddresses/edit/[deliveryId]/page";
import DeliveryAddressesList from "./helper-components/deliveryAddressesList/DeliveryAddressesList";

const DeliveryAddressesTab: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("deliveryAddresses");
  const [producttypesId, SetProducttypesId] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  // Define handleTabChange function
  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "deliveryAddresses") {
      router.push("/customers/deliveryAddresses");
    }
    // You can add more tab routes if needed
  };

  const handleEditClick = (id: string | number) => {
    const producttypesIdNumber = typeof id === "string" ? Number(id) : id;
    setActiveTab("edit");
    SetProducttypesId(String(producttypesIdNumber));
    router.push(`/customers/deliveryAddresses/edit/${producttypesIdNumber}`);
  };

  const handleDeleteClick = (id: string | number) => {
    SetProducttypesId(String(id));
    console.log("Delete Clicked", id);
    setOpenDialog(true);
  };

  const tabsData = [
    {
      id: "deliveryAddresses",
      label: "Delivery Addresses",
      icon: <AiOutlineUnorderedList />,
    },
    // Add more tabs here if needed
  ];

  return (
    <ContentWrapper>
      <TabsComponent
        activeTab={activeTab}
        setActiveTab={handleTabChange}  
        tabItems={tabsData}
        renderExtraContent={(activeTab) => {
          console.log("Active Tab:", activeTab);
          return activeTab === "deliveryAddresses" ? (
            <ButtonGroup
              onExportClick={() => console.log("Export Clicked")}
              anchorElExport={null}
              onExportClose={() => console.log("Export Closed")}
            />
          ) : null;
        }}
      />

      {activeTab === "deliveryAddresses" && (
        <DeliveryAddressesList
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {activeTab === "edit" && producttypesId && <EditDeliveryAddressesPage />}

      <DeleteCategories
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        categoriesId={null}
      />
    </ContentWrapper>
  );
};

const DeliveryAddressesComponent: React.FC = () => (
  <Container>
    <HeaderWrapper>
      <HeaderContent title="Delivery Addresses" subtitle="Delivery Addresses Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "DeliveryAddresses", href: "/customers/deliveryAddresses" },
          { label: "DeliveryAddresses List" },
        ]}
      />
    </HeaderWrapper>
    <DeliveryAddressesTab />
  </Container>
);

export default DeliveryAddressesComponent;
