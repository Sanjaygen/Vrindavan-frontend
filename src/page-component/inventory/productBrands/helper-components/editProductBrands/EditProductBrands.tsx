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
import { ProductBrandsCheckboxItem, ProductBrandsContainer, ProductBrandsFormGroup, ProductBrandsHelperDiv, ProductBrandsHelperText, ProductBrandsLabel } from "../createProductBrands/CreateProductBrands.styled";
import { Button, ButtonsContainer, CreateProductWrapper, SecondaryButton, StyledHr } from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";
import { ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";

interface FormData {
    name: string;
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
      Save ProductBrand
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
    if (newTab === "productBrands") {
      router.push("/inventory/productBrands");
    } else if (newTab === "create") {
      router.push("/inventory/productBrands/create");
    }
  };

  return (
    <ContentWrapper>
      <Tabs
        activeTab="edit"
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "productBrands",
            label: "Product Brands",
            icon: <AiOutlineUnorderedList />,
          },
          { id: "create", label: "Create Product Brands", icon: <AiOutlinePlus /> },
          { id: "edit", label: "Edit Product Brands", icon: <FaPencilAlt /> },
        ]}
      />
      <EditProductBrandBox />
    </ContentWrapper>
  );
};

// Main Component
const EditProductBrands: React.FC = () => {

  return (
    <CreateProductWrapper>
       <HeaderWrapper>
       <HeaderContent title="Product Brands" subtitle="Product Brands Management" />
      <CustomBreadcrumbs
       links={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Product Brands", href: "/inventory/productBrands" },
        { label: "Product Brands List" },
      ]}
      />
    </HeaderWrapper>
      <ContentWrapper>
        <TabsContainer/>
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default EditProductBrands;
