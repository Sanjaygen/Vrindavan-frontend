import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiFillDashboard, AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { FaPencilAlt, FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
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

interface EditProductProps {
  productId: string;
}

const EditBox: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

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

  const handleRemoveImage = (event: React.MouseEvent) => {
    event.preventDefault();
    setImage(null);
  };

  const hasImage = Boolean(image);

  return (
    <FormContainer>
      <FormColumn>
        <FormRow>
          <Label htmlFor="name">Name *</Label>
          <InputContainer>
            <Input type="text" placeholder="Insert Name" id="name" />
            <HelperText>Insert Name</HelperText>
          </InputContainer>
        </FormRow>

        <FormRow>
          <Label htmlFor="description">Description *</Label>
          <InputContainer>
            <NoteToolbar value={""} onChange={() => {}} />
            <HelperText>Insert Description</HelperText>
          </InputContainer>
        </FormRow>

        <FormRow>
          <Label htmlFor="weightage">Weightage *</Label>
          <InputContainer>
            <Input type="text" placeholder="Enter Weightage" id="weightage" />
            <HelperText>Enter Weight</HelperText>
          </InputContainer>
        </FormRow>
      </FormColumn>

      <FormRow>
        <Label htmlFor="images">Image</Label>
        <InputContainer>
          <UploadArea hasImage={hasImage} onClick={handleUploadClick}>
            {!hasImage ? (
              <>
                <UploadIcon>
                  <MdCloudUpload />
                </UploadIcon>
                <UploadText>Drop files here to upload</UploadText>
              </>
            ) : (
              <div>
                <ImagePreview>
                  {image && (
                    <Image
                      src={image}
                      alt="Uploaded Preview"
                      width={200}
                      height={200}
                    />
                  )}
                </ImagePreview>
                <RemoveLink onClick={handleRemoveImage} href="#">
                  Remove file
                </RemoveLink>
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
        <Button variant="outlined">
          <IoIosSave /> Save Category
        </Button>
        <SecondaryButton>
          <FaUndo /> Cancel
        </SecondaryButton>
      </ButtonsContainer>
    </FormContainer>
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

const TabsContainer: React.FC = () => {
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
        activeTab={"edit"}
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "productsList",
            label: "Products List",
            icon: <AiOutlineUnorderedList />,
          },
          {
            id: "create",
            label: "Create Product",
            icon: <AiOutlinePlus />,
          },
          { id: "edit", label: "Edit Product", icon: <FaPencilAlt /> },
        ]}
      />
      <EditBox />
    </ContentWrapper>
  );
};

// Main Component
const EditProductComponent: React.FC<EditProductProps> = ({ productId }) => {
  console.log("productId", productId);

  return (
    <CreateProductWrapper>
      <HeaderWrapper>
        <HeaderTitle>Edit Product</HeaderTitle>
        <Breadcrumbs />
      </HeaderWrapper>
      <TabsContainer />
    </CreateProductWrapper>
  );
};

export default EditProductComponent;
