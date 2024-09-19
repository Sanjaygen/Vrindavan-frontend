import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillDashboard, AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
import NoteToolbar from "./NoteToolbar";
import {
  FormContainer,
  FormColumn,
  FormRow,
  Label,
  InputContainer,
  HelperText,
  UploadArea,
  UploadIcon,
  UploadText,
  ImagePreview,
  RemoveLink,
  StyledButton,
  StyledHr,
  ButtonsContainer,
  CreateProductWrapper,
  HeaderWrapper,
  HeaderTitle,
  BreadcrumbContainer,
  BreadcrumbItem,
  IconWrapper,
  BreadcrumbLink,
  ContentWrapper,
  Input,
} from "./CreateProduct.styled";
import { Controller, useForm } from "react-hook-form";
import { useCreateProduct } from "@/hooks/useProducts";
import Tabs from "@/ui-components/tabs/Tabs";

// Types
interface FormData {
  name: string;
  description: string;
  weightage: string;
}

interface CreateBoxProps {
  image: string | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleUploadClick: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// CreateInputFields Component
const CreateInputFields: React.FC<CreateBoxProps> = ({
  image,
  fileInputRef,
  handleUploadClick,
  handleFileChange,
  handleRemoveImage,
}) => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      name: '',
      description: '',
      weightage: '',
    }
  });

  const { mutate: createProduct } = useCreateProduct();

  const onSubmit = async (data: FormData) => {
    const payload = {
      ...data,
      image,
    };

    await createProduct(payload);
  };

  return (
    <FormContainer>
      <FormColumn>
        <FormRow>
          <Label htmlFor="name">Name *</Label>
          <InputContainer>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Insert Name" id="name" />}
            />
            <HelperText>Insert Name</HelperText>
          </InputContainer>
        </FormRow>

        <FormRow>
          <Label htmlFor="description">Description *</Label>
          <InputContainer>
            <NoteToolbar
              value={control._formValues?.description || ""}
              onChange={(value) => setValue('description', value)}
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
              render={({ field }) => <Input {...field} placeholder="Enter Weightage" id="weightage" />}
            />
            <HelperText>Enter Weight</HelperText>
          </InputContainer>
        </FormRow>
      </FormColumn>

      <FormRow>
        <Label htmlFor="images">Image</Label>
        <InputContainer>
          <UploadArea hasImage={!!image} onClick={handleUploadClick}>
            {!image ? (
              <>
                <UploadIcon><MdCloudUpload /></UploadIcon>
                <UploadText>Drop files here to upload</UploadText>
              </>
            ) : (
              <div>
                <ImagePreview>
                  <img src={image} alt="Uploaded Preview" width={200} height={200} />
                </ImagePreview>
                <RemoveLink onClick={handleRemoveImage}>Remove file</RemoveLink>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </UploadArea>
          <HelperText>Insert image in SVG format</HelperText>
        </InputContainer>
      </FormRow>

      <StyledButton variant="outlined">From Media</StyledButton>
      <StyledHr />
      <ButtonsContainer>
        <StyledButton variant="outlined" onClick={handleSubmit(onSubmit)}>
          <IoIosSave /> Save Category
        </StyledButton>
        <StyledButton variant="outlined">
          <FaUndo /> Cancel
        </StyledButton>
      </ButtonsContainer>
    </FormContainer>
  );
};

// TabsContainer Component
const TabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("create");
  const router = useRouter();

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    if (newTab === "productsList") {
      router.push("/products");
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

// Breadcrumb Component
const Breadcrumb: React.FC = () => (
  <BreadcrumbContainer>
    <BreadcrumbItem>
      <IconWrapper><AiFillDashboard /></IconWrapper>
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem><BreadcrumbLink href="/products">Products</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbItem>Create Product</BreadcrumbItem>
  </BreadcrumbContainer>
);

// CreateProductComponents Component
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
        <HeaderTitle>Create Product</HeaderTitle>
        <Breadcrumb />
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
