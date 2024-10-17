"use client";
import CustomDropdown from "@/ui-components/dropdown/CustomDropDown";
import {
  Container,
  CustomDropdownPart,
  FieldGroup,
  Label,
  Row,
  Value,
} from "./EditDeliveryAddresses.styled";
import {
  Button,
  ButtonsContainer,
  CreateProductWrapper,
  SecondaryButton,
  StyledHr,
} from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";
import { IoIosSave } from "react-icons/io";
import { FaPencilAlt, FaUndo } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import Tabs from "@/ui-components/tabs/Tabs";
import { ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import { AiOutlineUnorderedList } from "react-icons/ai";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import { useRouter } from "next/navigation";


interface FormData {
  description: string;
  longitude: string;
  address: string;
  isDefault: string;
  latitude: string;
  userId: string;
  locality: string;
  approveStatus: string;
}

const EditDeliveryAddressesBox: React.FC = () => {
  const { handleSubmit, setValue } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <>
        <Container>
          {/* First Row */}
          <Row>
            <FieldGroup>
              <Label>Description</Label>
              <Value>Description of the location</Value>
            </FieldGroup>
            <FieldGroup>
              <Label>Longitude</Label>
              <Value>77.7372992</Value>
            </FieldGroup>
          </Row>

          {/* Second Row */}
          <Row>
            <FieldGroup>
              <Label>Address</Label>
              <Value>B-105</Value>
            </FieldGroup>
            <FieldGroup>
              <Label>Is Default</Label>
              <Value>Yes</Value>
            </FieldGroup>
          </Row>

          {/* Third Row */}
          <Row>
            <FieldGroup>
              <Label>Latitude</Label>
              <Value>12.9270133</Value>
            </FieldGroup>
            <FieldGroup>
              <Label>User Id</Label>
              <Value>Rajeswai</Value>
            </FieldGroup>
          </Row>

          {/* Fourth Row */}
          <Row>
            <FieldGroup>
              <Label>Locality</Label>
              <CustomDropdownPart>
              <CustomDropdown
                options={["Locality 1", "Locality 2", "Locality 3"]}
                placeholder="All Locality"
                onChange={(value) => setValue("locality", value as string)}
                width={"350px"}
                dropdownWidth={"350px"}
                listWidth={"350px"}
                iconClassName="custom-icon-right"
                widthClassName="custom-width"
              />
              </CustomDropdownPart>
            </FieldGroup>
            <FieldGroup>
              <Label>Approve Status</Label>
              <CustomDropdownPart>
              <CustomDropdown
                options={["Active", "InActive"]}
                placeholder="Active"
                onChange={(value) => setValue("approveStatus", value as string)}
                width={"350px"}
                dropdownWidth={"350px"}
                listWidth={"350px"}
                iconClassName="custom-icon-right"
                widthClassName="custom-width"
              />
              </CustomDropdownPart>
            </FieldGroup>
          </Row>
        </Container>
        <StyledHr />
        <ButtonsContainer>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            <IoIosSave />
            Save Customer
          </Button>
          <SecondaryButton>
            <FaUndo />
            Cancel
          </SecondaryButton>
        </ButtonsContainer>
    </>
  );
};

const TabsContainer: React.FC = () => {
    const router = useRouter();

    const handleTabChange = (newTab: string) => {
        if (newTab === "deliveryAddresses") {
          router.push("/customers/deliveryAddresses");
        }
      };
  return (
    <ContentWrapper>
      <Tabs
        activeTab="edit"
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "deliveryAddresses",
            label: "Delivery Addresses",
            icon: <AiOutlineUnorderedList />,
          },
          {
            id: "edit",
            label: "Edit Delivery Addresses",
            icon: <FaPencilAlt />,
          },
        ]}
      />
      <EditDeliveryAddressesBox />
    </ContentWrapper>
  );
};

const EditDeliveryAddressesComponents: React.FC = () => {
  return (
    <CreateProductWrapper>
      <HeaderWrapper>
        <HeaderContent
          title="Delivery Addresses"
          subtitle="Delivery Addresses Management"
        />
        <CustomBreadcrumbs
          links={[
            { label: "Dashboard", href: "/dashboard" },
            {
              label: "DeliveryAddresses",
              href: "/customers/deliveryAddresses",
            },
            { label: "DeliveryAddresses List" },
          ]}
        />
      </HeaderWrapper>
      <ContentWrapper>
        <TabsContainer />
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default EditDeliveryAddressesComponents;
