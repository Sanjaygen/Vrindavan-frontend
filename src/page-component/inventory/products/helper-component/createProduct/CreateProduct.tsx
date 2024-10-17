import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
import {
  StyledHr,
  ButtonsContainer,
  CreateProductWrapper,
  ProductFormContainer,
  ProductLabel,
  ProductUploadArea,
  ImageDiv,
  ProductUploadIcon,
  ProductUploadText,
  ProductImagePreview,
  ProductRemoveLink,
  CheckboxContainer,
  CheckboxItem,
  ProductHelperText,
  ProductFormGroup,
  RightColumn,
  LeftColumn,
  Button,
  SecondaryButton,
  CustomDropdownWrapper,
} from "./CreateProduct.styled";
import { useForm } from "react-hook-form";
import { useCreateProduct } from "@/hooks/useProducts";
import Tabs from "@/ui-components/tabs/Tabs";
import { ProductProps } from "@/service/types";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import NoteToolbar from "./NoteToolbar";
import { CreateBoxProps, FormDataProps } from "../../types";
import CustomDropdown from "@/ui-components/dropdown/CustomDropDown";
import FormInput from "@/ui-components/forms/input";
import FormCheckbox from "@/ui-components/forms/checkbox";
import { ContentWrapper, HeaderWrapper } from "../../Product.styled";

// CreateInputFields Component
const CreateInputFields: React.FC<CreateBoxProps> = ({
  image,
  fileInputRef,
  handleUploadClick,
  handleFileChange,
  handleRemoveImage,
}) => {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { dirtyFields, errors },
    reset,
  } = useForm<FormDataProps>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      discount_price: 0,
      locality_id: "",
      product_type_id: "",
      product_brand_id: "",
      weightage: "",
      unit_size: "",
      sku_code: "",
      barcode: "",
      cgst: "",
      sgst: "",
      category_id: "",
      subcategory_id: "",
      featured: false,
      subscription: false,
      track_inventory: false,
      active: false,
    },
  });
  const { mutate: createProduct } = useCreateProduct();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://vrindavan.ap-south-1.elasticbeanstalk.com/api/category');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const result = await response.json();
        setCategories(result.data); 
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = async (data: FormDataProps) => {
    console.log(data, 'data')
    const selectedCategory = categories.find(category => category.name === data.category_id); 
    console.log(selectedCategory , selectedCategory)
    const payload: ProductProps = {
      id: new Date().getTime(),
      ...data,
      category_id: selectedCategory ? selectedCategory.id : null,
      image,
    };
    console.log("Payload before submission:", payload);
    await createProduct(payload);
    reset();
  };
  return (
    <>
      <ProductFormContainer>
        <LeftColumn>
          <ProductFormGroup>
            <ProductLabel htmlFor="name">Name *</ProductLabel>
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
              errorText={errors?.name?.message}
            />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="price">Price *</ProductLabel>
            <FormInput
              name="price"
              width={"350px"}
              control={control}
              type={"number"}
              placeholder="Enter Price"
              rules={{
                required: {
                  value: true,
                  message: "Price is required",
                },
              }}
              showCheckIcon={!errors.price && dirtyFields.price}
              errorText={errors?.price?.message}
            />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="discountPrice">Discount Price</ProductLabel>
            <FormInput
              name="discount_price"
              width={"350px"}
              control={control}
              type={"number"}
              placeholder="Insert Discount Price"
              rules={{
                required: {
                  value: true,
                  message: "Discount Price is required",
                },
              }}
              showCheckIcon={
                !errors.discount_price && dirtyFields.discount_price
              }
              errorText={errors?.discount_price?.message}
            />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="description">Description </ProductLabel>
            <NoteToolbar
              value={control._formValues?.description || ""}
              onChange={(value) => setValue("description", value)}
            />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="productType">Product Type *</ProductLabel>
            <CustomDropdownWrapper>
            <CustomDropdown
              options={["Milk", "Cake", "Dairy"]}
              placeholder="Select Product Type"
              onChange={(value) => setValue("product_type_id", value)}
              width={"350px"}
                dropdownWidth={"350px"}
                listWidth={"350px"}
                iconClassName="custom-icon-right" 
            />
            </CustomDropdownWrapper>
          </ProductFormGroup>

          <ProductFormGroup>
      <ProductLabel htmlFor="productBrand">Product Brand</ProductLabel>
      <CustomDropdownWrapper>
        <CustomDropdown
                options={["Vrindavan"]}
                placeholder="Select Product Brand"
                onChange={(value) => setValue("product_brand_id", value)}
                width={"350px"}
                dropdownWidth={"350px"}
                listWidth={"350px"}
                iconClassName="custom-icon-right" 
                    />
      </CustomDropdownWrapper>
    </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="locality">Locality</ProductLabel>
            <CustomDropdownWrapper>
            <CustomDropdown
              options={["Locality 1", "Locality 2", "Locality 3"]}
              placeholder="Select Locality"
              onChange={(value) => setValue("locality_id", value)}
              width={"350px"}
              dropdownWidth={"350px"}
              listWidth={"350px"}
              iconClassName="custom-icon-right" 
            />
            </CustomDropdownWrapper>
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="weightage">Weightage *</ProductLabel>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <FormInput
                name="weightage"
                width={"350px"}
                control={control}
                type={"text"}
                placeholder="Enter Weightage"
                rules={{
                  required: {
                    value: true,
                    message: "Weightage is required",
                  },
                }}
                showCheckIcon={!errors.weightage && dirtyFields.weightage}
                errorText={errors?.weightage?.message}
              />
              <ProductHelperText>Enter Weight</ProductHelperText>
            </div>
          </ProductFormGroup>
        </LeftColumn>

        {/* Right column */}
        <RightColumn>
          <ProductFormGroup>
            <ProductLabel htmlFor="images">Image</ProductLabel>
            <ProductUploadArea hasImage={!!image} onClick={handleUploadClick}>
              {!image && (
                <ImageDiv>
                  <ProductUploadIcon>
                    <MdCloudUpload />
                  </ProductUploadIcon>
                  <ProductUploadText>
                    Drop files here to upload
                  </ProductUploadText>
                </ImageDiv>
              )}
              {image && (
                <div>
                  <ProductImagePreview>
                    <img src={image} alt="Uploaded Preview" />
                  </ProductImagePreview>
                  <ProductRemoveLink onClick={handleRemoveImage} href="#">
                    Remove file
                  </ProductRemoveLink>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </ProductUploadArea>
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="unitSize">Unit Size *</ProductLabel>
            <FormInput
              name="unit_size"
              width={"350px"}
              control={control}
              type={"text"}
              placeholder="Insert unit size"
              rules={{
                required: {
                  value: true,
                  message: "UnitSize is required",
                },
              }}
              showCheckIcon={!errors.unit_size && dirtyFields.unit_size}
              errorText={errors?.unit_size?.message}
            />
          </ProductFormGroup>
          <ProductFormGroup>
            <ProductLabel htmlFor="skuCode">SKU Code</ProductLabel>
            <FormInput
              name="sku_code"
              width={"350px"}
              control={control}
              type={"text"}
              placeholder="Insert SKU Code"
              rules={{
                required: {
                  value: true,
                  message: "SKU Code is required",
                },
              }}
              showCheckIcon={!errors.sku_code && dirtyFields.sku_code}
              errorText={errors?.sku_code?.message}
            />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="barcode">Barcode</ProductLabel>
            <FormInput
              name="barcode"
              width={"350px"}
              control={control}
              type={"text"}
              placeholder="Insert Barcode"
              rules={{
                required: {
                  value: true,
                  message: "Barcode is required",
                },
              }}
              showCheckIcon={!errors.barcode && dirtyFields.barcode}
              errorText={errors?.barcode?.message}
            />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="cgst">CGST(%)</ProductLabel>
            <FormInput
              name="cgst"
              width={"350px"}
              control={control}
              type={"text"}
              placeholder="Insert CGST"
              rules={{
                required: {
                  value: true,
                  message: "CGST is required",
                },
              }}
              showCheckIcon={!errors.cgst && dirtyFields.cgst}
              errorText={errors?.cgst?.message}
            />
          </ProductFormGroup>
          <ProductFormGroup>
            <ProductLabel htmlFor="sgst">SGST(%)</ProductLabel>
            <FormInput
              name="sgst"
              width={"350px"}
              control={control}
              type={"text"}
              placeholder="Insert SGST"
              rules={{
                required: {
                  value: true,
                  message: "SGST is required",
                },
              }}
              showCheckIcon={!errors.cgst && dirtyFields.cgst}
              errorText={errors?.cgst?.message}
            />
          </ProductFormGroup>
          <ProductFormGroup>
            <ProductLabel htmlFor="category">Category *</ProductLabel>
            <CustomDropdownWrapper>
            <CustomDropdown
              options={categories.map(category => category.name)}
              placeholder="Select Category"
              onChange={(value) => setValue("category_id", value)}
              width={"350px"}
                dropdownWidth={"350px"}           
                listWidth={"350px"}
                iconClassName="custom-icon-right" 
            />
            </CustomDropdownWrapper>
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="subcategory">Sub Category *</ProductLabel>
            <CustomDropdownWrapper>
            <CustomDropdown
              options={["Subcategory 1", "Subcategory 2", "Subcategory 3"]}
              placeholder="Select Sub Category"
              onChange={(value) => setValue("subcategory_id", value)}
              width={"350px"}
                dropdownWidth={"350px"}
                listWidth={"350px"}
                iconClassName="custom-icon-right" 
            />
            </CustomDropdownWrapper>
          </ProductFormGroup>
          <CheckboxContainer>
            <CheckboxItem>
              <ProductLabel htmlFor="featured">Featured</ProductLabel>
              <FormCheckbox
                name="featured"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "",
                  },
                }}
                showCheckIocn={!errors.featured && dirtyFields.featured}
                errorText={errors?.featured?.message}
              />
            </CheckboxItem>
            <CheckboxItem>
              <ProductLabel htmlFor="subscription">Subscription</ProductLabel>
              <FormCheckbox
                name="subscription"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "",
                  },
                }}
                showCheckIocn={!errors.subscription && dirtyFields.subscription}
                errorText={errors?.subscription?.message}
              />
            </CheckboxItem>
            <CheckboxItem>
              <ProductLabel htmlFor="trackInventory">
                Track Inventory
              </ProductLabel>
              <FormCheckbox
                name="track_inventory"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "",
                  },
                }}
                showCheckIocn={
                  !errors.track_inventory && dirtyFields.track_inventory
                }
                errorText={errors?.track_inventory?.message}
              />
            </CheckboxItem>
            <CheckboxItem>
              <ProductLabel htmlFor="active">Active</ProductLabel>
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
            </CheckboxItem>
          </CheckboxContainer>
        </RightColumn>
      </ProductFormContainer>

      <StyledHr />
      <ButtonsContainer>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          <IoIosSave />
          Save product
        </Button>
        <SecondaryButton>
          <FaUndo />
          Cancel
        </SecondaryButton>
      </ButtonsContainer>
    </>
  );
};

// TabsContainer Component
const TabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("create");
  const router = useRouter();

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "productsList") {
      router.push("/inventory/products");
    }
  };

  return (
    <Tabs
      activeTab={activeTab}
      setActiveTab={handleTabChange}
      tabItems={[
        {
          id: "productsList",
          label: "Products List",
          icon: <AiOutlineUnorderedList />,
        },
        { id: "create", label: "Create Product", icon: <AiOutlinePlus /> },
      ]}
    />
  );
};

const  CreateProductComponents: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    setImage(null);
  };

  return (
    <CreateProductWrapper>
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
      <ContentWrapper>
        <TabsContainer />
        <CreateInputFields
          image={image}
          fileInputRef={fileInputRef}
          handleUploadClick={handleUploadClick}
          handleFileChange={handleFileChange}
          handleRemoveImage={handleRemoveImage}
        />
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default CreateProductComponents;
