'use client';
import {
  Button,
  ButtonsContainer,
  CreateProductWrapper,
  SecondaryButton,
  StyledHr,
} from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";
import { ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import Tabs from "@/ui-components/tabs/Tabs";
import FormInput from "@/ui-components/forms/input";
import { IoIosSave } from "react-icons/io";
import { FaUndo } from "react-icons/fa";
import FormCheckbox from "@/ui-components/forms/checkbox";
import { ProductBrandsCheckboxItem, ProductBrandsContainer, ProductBrandsFormGroup, ProductBrandsHelperDiv,  ProductBrandsLabel,ProductBrandsHelperText } from "@/page-component/inventory/productBrands/helper-components/createProductBrands/CreateProductBrands.styled";

interface FormData {
    name: string;
    weightage: string;
    active: boolean;
  }
const ProductTypesFields = () => {
  const { control, handleSubmit, formState: { errors, dirtyFields } } = useForm<FormData>();

  const onSubmit = (data: unknown) => {

    console.log(data);
  };

  return (
    <>
      <ProductBrandsContainer>
        <ProductBrandsFormGroup>
          <ProductBrandsLabel htmlFor="name">Name *</ProductBrandsLabel>
          <ProductBrandsHelperDiv>
            <FormInput
              name="name"
              width={"350px"}
              control={control}
              placeholder="Enter Name"
              rules={{
                required: {
                  value: true,
                  message: "Name is required",
                },
              }}
              showCheckIcon={!errors.name && dirtyFields.name}
              errorText={errors.name ? errors.name.message : ""}
            />
            <ProductBrandsHelperText>Insert Name</ProductBrandsHelperText>
          </ProductBrandsHelperDiv>
        </ProductBrandsFormGroup>
        <ProductBrandsFormGroup>
          <ProductBrandsLabel htmlFor="weightage">Weightage *</ProductBrandsLabel>
          <ProductBrandsHelperDiv>
            <FormInput
              name="weightage"
              width={"350px"}
              control={control}
              placeholder="Enter weightage"
              rules={{
                required: {
                  value: true,
                  message: "weightage is required",
                },
              }}
              showCheckIcon={!errors.weightage && dirtyFields.weightage}
              errorText={errors.weightage ? errors.weightage.message : ""}
            />
            <ProductBrandsHelperText>Insert Weightage</ProductBrandsHelperText>
          </ProductBrandsHelperDiv>
        </ProductBrandsFormGroup>
        <ProductBrandsCheckboxItem>
              <ProductBrandsLabel htmlFor="active">Active</ProductBrandsLabel>
              <FormCheckbox
                name="active"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "",
                  },
                }}
                showCheckIocn={!errors.active && dirtyFields.active}
                errorText={errors?.active?.message}
              />
            </ProductBrandsCheckboxItem>
      </ProductBrandsContainer>
      <StyledHr />
      <ButtonsContainer>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          <IoIosSave />
          Save Product Type
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
  const [activeTab, setActiveTab] = useState<string>("create");
  const router = useRouter();

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "productTypes") {
      router.push("/inventory/productTypes");
    }
  };

  return (
    <Tabs
      activeTab={activeTab}
      setActiveTab={handleTabChange}
      tabItems={[
        {
          id: "productTypes",
          label: "Product Types",
          icon: <AiOutlineUnorderedList />,
        },
        { id: "create", label: "Create Product Types", icon: <AiOutlinePlus /> },
      ]}
    />
  );
};

const CreateProductTypesComponents: React.FC = () => {
  return (
    <CreateProductWrapper>
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
      <ContentWrapper>
        <TabsContainer />
        <ProductTypesFields />
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default CreateProductTypesComponents;
