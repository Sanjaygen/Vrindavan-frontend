import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaPencilAlt, FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
import {  useForm } from "react-hook-form";
import NoteToolbar from "../createProduct/NoteToolbar";
import Tabs from "@/ui-components/tabs/Tabs";
import {
  Button,
  ButtonsContainer,
  SecondaryButton,
  StyledHr,
  CreateProductWrapper,
} from "./EditProduct.styled";
import { useProductById, useUpdateProduct } from "@/hooks/useProducts";
import { ProductProps } from "@/service/types";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import { ContentWrapper, HeaderWrapper } from "../../Product.styled";
import { CheckboxContainer, CheckboxItem, CustomDropdownWrapper, ImageDiv, LeftColumn, ProductFormContainer, ProductFormGroup, ProductHelperText, ProductImagePreview, ProductLabel, ProductRemoveLink, ProductUploadArea, ProductUploadIcon, ProductUploadText, RightColumn } from "../createProduct/CreateProduct.styled";
import FormCheckbox from "@/ui-components/forms/checkbox";
import CustomDropdown from "@/ui-components/dropdown/CustomDropDown";
import FormInput from "@/ui-components/forms/input";

interface EditProductProps {
  productId: number;
}

const EditBox: React.FC<{
  product: ProductProps | null;
  onSave: (data: { id: number; payload: ProductProps }) => void;
}> = ({ product, onSave }) => {
  const { control, handleSubmit,formState: { dirtyFields, errors }, setValue, watch, reset } =
    useForm<ProductProps>({
      defaultValues: {
        name: product?.name || "",
        price:product?.price || "",
        discount_price:product?.discount_price || "",
        description: product?.description || "",
        product_type_id:product?.product_type_id || "",
        product_brand_id:product?.product_brand_id || "",
        locality_id:product?.locality_id || "",
        weightage: product?.weightage || "",
        image: product?.image || null,
        unit_size: product?.unit_size || "",
        sku_code:product?.sku_code || "",
        barcode:product?.barcode || "",
        cgst:product?.cgst || "",
        sgst:product?.sgst || "",
        category_id:product?.category_id || "",
        subcategory_id:product?.subcategory_id || "",
        featured: product?.featured || "",
        subscription: product?.subscription || "",
        track_inventory: product?.track_inventory || "",
        active: product?.active || "",

      },
    });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const image = watch("image");

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
        weightage: product.weightage,
        image: product.image || null,
      });
    }
  }, [product, reset]);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setValue("image", reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const onRemoveImage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setValue("image", null);
  };

  const onSubmit = (data: ProductProps) => {
    if (product) {
      const payload = {
        ...data,
        price: product.price,
        categoryId: product.category_id,
      };

      onSave({
        id: product.id as number,
        payload,
      });
    }
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
            <ProductUploadArea hasImage={!!image}>
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
                  <ProductRemoveLink onClick={onRemoveImage} href="#">
                    Remove file
                  </ProductRemoveLink>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={onImageChange}
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
              options={["Rice", "Pooja Needs", "Millets"]}
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

const TabsContainer: React.FC<{ product: ProductProps | null }> = ({
  product,
}) => {
  const router = useRouter();
  const { mutate: updateProduct } = useUpdateProduct();

  const handleTabChange = (newTab: string) => {
    if (newTab === "productsList") {
      router.push("/inventory/products");
    } else if (newTab === "create") {
      router.push("/inventory/products/create");
    }
  };

  return (
    <ContentWrapper>
      <Tabs
        activeTab="edit"
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "productsList",
            label: "Products List",
            icon: <AiOutlineUnorderedList />,
          },
          { id: "create", label: "Create Product", icon: <AiOutlinePlus /> },
          { id: "edit", label: "Edit Product", icon: <FaPencilAlt /> },
        ]}
      />
      <EditBox
        product={product}
        onSave={({ id, payload }) => updateProduct({ id, payload })}
      />
    </ContentWrapper>
  );
};

// Main Component
const EditProductComponent: React.FC<EditProductProps> = ({ productId }) => {
  const { data, isLoading, error } = useProductById(productId);
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    if (data && !Array.isArray(data)) {
      setProduct(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

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
        {product && <TabsContainer product={product} />}
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default EditProductComponent;
