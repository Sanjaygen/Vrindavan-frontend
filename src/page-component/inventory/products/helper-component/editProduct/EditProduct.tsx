import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AiFillDashboard,
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaPencilAlt, FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import NoteToolbar from "../createProduct/NoteToolbar";
import Tabs from "@/ui-components/tabs/Tabs";
import {
  Button,
  ButtonsContainer,
  FormColumn,
  FormContainer,
  FormRow,
  HelperText,
  ImagePreview,
  Input,
  InputContainer,
  Label,
  RemoveLink,
  SecondaryButton,
  StyledButton,
  StyledHr,
  UploadArea,
  UploadIcon,
  UploadText,
  CreateProductWrapper,
  HeaderWrapper,
  HeaderTitle,
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  IconWrapper,
  ContentWrapper,
} from "./EditProduct.styled";
import { useProductById, useUpdateProduct } from "@/hooks/useProducts";
import { ProductProps } from "@/service/types";

interface EditProductProps {
  productId: number;
}

interface EditBoxProps {
  product: ProductProps | null;
  onSave: (data: { id: string; payload: ProductProps }) => void; 
}

const EditBox: React.FC<EditBoxProps> = ({ product, onSave }) => {
  const { control, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      weightage: product?.weightage || "",
      image: product?.image || null,
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

  const onSubmit = (data: any) => {
    if (product) {
      const payload = {
        ...data,
        price: product.price,
        categoryId: product.categoryId,
        id: product.id,
      };

      onSave({
        id: product.id,
        payload,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormColumn>
          <FormRow>
            <Label htmlFor="name">Name *</Label>
            <InputContainer>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Insert Name"
                    id="name"
                    {...field}
                  />
                )}
              />
              <HelperText>Insert Name</HelperText>
            </InputContainer>
          </FormRow>

          <FormRow>
            <Label htmlFor="description">Description *</Label>
            <InputContainer>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <NoteToolbar
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
              <HelperText>Insert Description</HelperText>
            </InputContainer>
          </FormRow>

          <FormRow>
            <Label htmlFor="weightage">Weightage *</Label>
            <InputContainer>
              <Controller
                name="weightage"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Enter Weightage"
                    id="weightage"
                    {...field}
                  />
                )}
              />
              <HelperText>Enter Weight</HelperText>
            </InputContainer>
          </FormRow>
        </FormColumn>

        <FormRow>
          <Label htmlFor="image">Image</Label>
          <InputContainer>
            <UploadArea
              hasImage={Boolean(image)}
              onClick={() => fileInputRef.current?.click()}
            >
              {!image ? (
                <>
                  <UploadIcon>
                    <MdCloudUpload />
                  </UploadIcon>
                  <UploadText>Drop files here to upload</UploadText>
                </>
              ) : (
                <div>
                  <ImagePreview>
                    <img
                      src={image}
                      alt="Uploaded Preview"
                      width={200}
                      height={200}
                    />
                  </ImagePreview>
                  <RemoveLink
                    onClick={onRemoveImage}
                    href="#"
                  >
                    Remove file
                  </RemoveLink>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={onImageChange}
              />
            </UploadArea>
            <HelperText>Insert image in SVG format</HelperText>
          </InputContainer>
        </FormRow>

        <StyledButton type="submit" variant="outlined">
          Save Product
        </StyledButton>

        <StyledHr />

        <ButtonsContainer>
          <Button variant="outlined" type="submit">
            <IoIosSave /> Save Product
          </Button>
          <SecondaryButton>
            <FaUndo /> Cancel
          </SecondaryButton>
        </ButtonsContainer>
      </FormContainer>
    </form>
  );
};

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
    <BreadcrumbItem>Edit Product</BreadcrumbItem>
  </BreadcrumbContainer>
);

interface TabsContainerProps {
  product: ProductProps | null;
}

const TabsContainer: React.FC<TabsContainerProps> = ({ product }) => {
  const router = useRouter();

  const handleTabChange = (newTab: string) => {
    if (newTab === "productsList") {
      router.push("/products");
    } else if (newTab === "create") {
      router.push("/products/create");
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
      <EditBox product={product} onSave={useUpdateProduct().mutate} />
    </ContentWrapper>
  );
};

// Main Component
const EditProductComponent: React.FC<EditProductProps> = ({ productId }) => {
  const { data, isLoading, error } = useProductById(productId);
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      setProduct(data[0]);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <CreateProductWrapper>
      <HeaderWrapper>
        <HeaderTitle>Edit Product</HeaderTitle>
        <Breadcrumbs />
      </HeaderWrapper>
      <ContentWrapper>
        {product && <TabsContainer product={product} />}
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default EditProductComponent;
