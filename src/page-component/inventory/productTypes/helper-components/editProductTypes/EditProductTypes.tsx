import { useRouter } from "next/navigation";
import {
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaPencilAlt, FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import {  useForm } from "react-hook-form";

import Tabs from "@/ui-components/tabs/Tabs";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import FormCheckbox from "@/ui-components/forms/checkbox";
import FormInput from "@/ui-components/forms/input";
import { Button, ButtonsContainer, CreateProductWrapper, SecondaryButton, StyledHr } from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";
import { ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import { ProductBrandsLabel,ProductBrandsCheckboxItem, ProductBrandsContainer, ProductBrandsFormGroup, ProductBrandsHelperDiv, ProductBrandsHelperText,  } from "@/page-component/inventory/productBrands/helper-components/createProductBrands/CreateProductBrands.styled";

interface FormData {
    name: string;
    weightage: string;
    active: boolean;
  }
const EditProductBrandBox = () => {
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
          <ProductBrandsLabel htmlFor="weightage"> Weightage *</ProductBrandsLabel>
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

const TabsContainer = () => {
  const router = useRouter();

  const handleTabChange = (newTab: string) => {
    if (newTab === "productTypes") {
      router.push("/inventory/productTypes");
    } else if (newTab === "create") {
      router.push("/inventory/productTypes/create");
    }
  };

  return (
    <ContentWrapper>
      <Tabs
        activeTab="edit"
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "productTypes",
            label: "Product Types",
            icon: <AiOutlineUnorderedList />,
          },
          { id: "create", label: "Create Product Types", icon: <AiOutlinePlus /> },
          { id: "edit", label: "Edit Product Types", icon: <FaPencilAlt /> },
        ]}
      />
      <EditProductBrandBox />
    </ContentWrapper>
  );
};

// Main Component
const EditProductTypesComponents: React.FC = () => {

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
        <TabsContainer/>
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default EditProductTypesComponents;
