  import React, { useEffect, useRef, useState } from "react";
  import { useRouter } from "next/navigation";
  import {  AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
  import { FaUndo } from "react-icons/fa";
  import { IoIosSave } from "react-icons/io";
  import { MdCloudUpload } from "react-icons/md";
  import {
  StyledButton,
    StyledHr,
    ButtonsContainer,
    CreateProductWrapper,
    HeaderWrapper,
    ContentWrapper,
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
import { PHONE_REGEX, PHONENUMBER_REGEX } from "@/ui-components/forms/regex";
import FormPhoneNumberInput from "@/ui-components/forms/input-phone-number";
import FormCheckbox from "@/ui-components/forms/checkbox";
import { log } from "console";

  // CreateInputFields Component
  const CreateInputFields: React.FC<CreateBoxProps> = ({
    image,
    fileInputRef,
    handleUploadClick,
    handleFileChange,
    handleRemoveImage,
  }) => {
    const { handleSubmit,setValue,control,formState: { dirtyFields, errors }, reset,register } = useForm<FormDataProps>({
      defaultValues: {
        name: "",
        description: "",
        price: 0,
        discountPrice: undefined,
        locality:"",
        productType: "",
        productBrand:"",
        weightage: "",
        unitSize: "",
        category: "",
        subCategory: "",
        featured: false,
        subscription: false,
        trackInventory: false,
        active: false,
      }
    });
    const { mutate: createProduct } = useCreateProduct();
  
  const onSubmit = async (data: FormDataProps) => {
    const payload: ProductProps = {
      id: new Date().getTime(), 
      ...data,
      image,
    };
    console.log('Payload before submission:', payload);
    await createProduct(payload)
  };
    return (
      <>
      <ProductFormContainer>
      <LeftColumn>
      <ProductFormGroup>
            <ProductLabel htmlFor="name">Name *</ProductLabel>
            <FormInput
              name="name"
              width={"650px"}
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
              width={"650px"}
              control={control}
              type={'number'}
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
              name="discountPrice"
              width={"650px"}
              control={control}
              type={'number'}
              placeholder="Insert Discount Price"
              rules={{
                required: {
                  value: true,
                  message: "Discount Price is required",
                },
              }}
              showCheckIcon={!errors.discountPrice && dirtyFields.discountPrice}
              errorText={errors?.discountPrice?.message}
            />
          </ProductFormGroup>

            <ProductFormGroup>
              <ProductLabel htmlFor="description">Description </ProductLabel>
                <NoteToolbar value={control._formValues?.description || ""}
                 onChange={(value)=> setValue('description',value)}/>
            </ProductFormGroup>

            <ProductFormGroup>
              <ProductLabel htmlFor="productType">Product Type *</ProductLabel>
                <CustomDropdown
                 options={["Milk","Cake","Dairy"]}
                  placeholder="Select Product Type"
                  onChange={(value) => setValue('productType',value)}
                  width={""} dropdownWidth={""} listWidth={""} iconRight={""}/>
            </ProductFormGroup>

            <ProductFormGroup>
              <ProductLabel htmlFor="productBrand">Product Brand</ProductLabel>
                <CustomDropdown
                  options={["Vrindavan"]}
                  placeholder="Select Product Brand"
                  onChange={(value) => setValue('productBrand',value)}
                  width={""} dropdownWidth={""} listWidth={""} iconRight={""}  
                />
            </ProductFormGroup>

            <ProductFormGroup>
              <ProductLabel htmlFor="locality">Locality</ProductLabel>
                <CustomDropdown
                  options={["Locality 1", "Locality 2", "Locality 3"]}
                  placeholder="Select Locality"
                  onChange={(value) => setValue('locality',value)}
                  width={""} dropdownWidth={""} listWidth={""} iconRight={""}  
                />
            </ProductFormGroup>

            <ProductFormGroup>
              <ProductLabel htmlFor="weightage">Weightage *</ProductLabel>
              <FormInput
              name="weightage"
              width={"650px"}
              control={control}
              type={'text'}
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
                      <ProductUploadText>Drop files here to upload</ProductUploadText>
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
              name="unitSize"
              width={"650px"}
              control={control}
              type={'text'}
              placeholder="Insert unit size"
              rules={{
                required: {
                  value: true,
                  message: "UnitSize is required",
                },
              }}
              showCheckIcon={!errors.unitSize && dirtyFields.unitSize}
              errorText={errors?.unitSize?.message}
            />
          </ProductFormGroup>
          <ProductFormGroup>
            <ProductLabel htmlFor="skuCode">SKU Code</ProductLabel>
            <FormInput
              name="skuCode"
              width={"650px"}
              control={control}
              type={'text'}
              placeholder="Insert SKU Code"
              rules={{
                required: {
                  value: true,
                  message: "SKU Code is required",
                },
              }}
              showCheckIcon={!errors.skuCode && dirtyFields.skuCode}
              errorText={errors?.skuCode?.message}
            />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="barcode">Barcode</ProductLabel>
            <FormInput
              name="barcode"
              width={"650px"}
              control={control}
              type={'text'}
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
              width={"650px"}
              control={control}
              type={'text'}
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
              width={"650px"}
              control={control}
              type={'text'}
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
              <CustomDropdown
                options={["Rice", "Pooja Needs", "Millets"]}
                placeholder="Select Category"
                onChange={(value) => setValue('category',value)}
                width={""} dropdownWidth={""} listWidth={""} iconRight={"10px"}  
              />
          </ProductFormGroup>

          <ProductFormGroup>
            <ProductLabel htmlFor="subcategory">Sub Category *</ProductLabel>
              <CustomDropdown
                options={["Subcategory 1", "Subcategory 2", "Subcategory 3"]} 
                placeholder="Select Sub Category"
                onChange={(value) => setValue('subCategory',value)}
                width={""} dropdownWidth={""} listWidth={""} iconRight={"10px"}  
              />
          </ProductFormGroup>
          </RightColumn>
        </ProductFormContainer>

        <CheckboxContainer>
          <CheckboxItem>
            <ProductLabel htmlFor="featured">Featured</ProductLabel>
            <FormCheckbox
                    name="featured"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: ''
                        }
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
                            message: ''
                        }
                    }}
                    showCheckIocn={!errors.subscription && dirtyFields.subscription}
                    errorText={errors?.subscription?.message}
                />
          </CheckboxItem>
          <CheckboxItem>
            <ProductLabel htmlFor="trackInventory">Track Inventory</ProductLabel>
            <FormCheckbox
                    name="trackInventory"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: ''
                        }
                    }}
                    showCheckIocn={!errors.trackInventory && dirtyFields.trackInventory}
                    errorText={errors?.trackInventory?.message}
                />
          </CheckboxItem>
          <CheckboxItem>
            <ProductLabel htmlFor="active">Active </ProductLabel>
            <FormCheckbox
                    name="active"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: ''
                        }
                    }}
                    showCheckIocn={!errors.active && dirtyFields.active}
                    errorText={errors?.active?.message}
                />
          </CheckboxItem>
        </CheckboxContainer>
    <StyledHr />
    <ButtonsContainer>
          <StyledButton variant="outlined" onClick={handleSubmit(onSubmit)}>
            <IoIosSave /> Save Category
          </StyledButton>
          <StyledButton variant="outlined">
            <FaUndo /> Cancel
          </StyledButton>
        </ButtonsContainer></>
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
          { id: "productsList", label: "Products List", icon: <AiOutlineUnorderedList /> },
          { id: "create", label: "Create Product", icon: <AiOutlinePlus /> },
        ]}
      />
    );
  };

  const CreateProductComponents: React.FC = () => {
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
