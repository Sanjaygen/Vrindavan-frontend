import { useCreateCategories } from "@/hooks/useCategories";
import { Button, ButtonsContainer, CreateProductWrapper,  ProductUploadArea,  SecondaryButton, StyledHr } from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";
import { ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import { CreateBoxProps } from "@/page-component/inventory/products/types";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import Tabs from "@/ui-components/tabs/Tabs";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { CategoriesDataProps } from "../../types";
import { CategoriesProps } from "@/service/types";
import FormInput from "@/ui-components/forms/input";
import NoteToolbar from "@/page-component/inventory/products/helper-component/createProduct/NoteToolbar";
import { MdCloudUpload } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaUndo } from "react-icons/fa";
import { CategoriesFormContainer, CategoriesFormGroup, CategoriesHelperText, CategoriesImagePreview, CategoriesLabel, CategoriesLeftColumn, CategoriesRemoveLink, CategoriesRightColumn, CategoriesUploadIcon, CategoriesUploadText, HelperDiv, ImagesDiv, MediaButton } from "../../Categories.styled";
const CategoriesFields: React.FC<CreateBoxProps> = ({
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
      } = useForm<CategoriesDataProps>({
        defaultValues: {
          name: "",
          description: "",
          weightage: "",
        },
      });
      const { mutate: createCategories } = useCreateCategories();
      const onSubmit = async (data: CategoriesDataProps) => {
    
        const payload: CategoriesProps = {
          id: new Date().getTime(),
          ...data,
          image,
        };
        console.log("Payload before submission:", payload);
        await createCategories(payload);
        reset();
      };
    return(
      <>
      <CategoriesFormContainer>
      <CategoriesLeftColumn>
      <CategoriesFormGroup>
            <CategoriesLabel htmlFor="name">Name *</CategoriesLabel>
            <HelperDiv>
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
            <CategoriesHelperText>Insert Name</CategoriesHelperText>
            </HelperDiv>
          </CategoriesFormGroup>

          <CategoriesFormGroup>
            <CategoriesLabel htmlFor="description">Description </CategoriesLabel>
            <HelperDiv>
            <NoteToolbar
              value={control._formValues?.description || ""}
              onChange={(value) => setValue("description", value)}
            />
            <CategoriesHelperText>Insert Description</CategoriesHelperText>
            </HelperDiv>
          </CategoriesFormGroup>
          <CategoriesFormGroup>
            <CategoriesLabel htmlFor="weightage">Weightage *</CategoriesLabel>
            <HelperDiv>
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
              <CategoriesHelperText>Enter Weight</CategoriesHelperText>
            </HelperDiv>
          </CategoriesFormGroup>
          </CategoriesLeftColumn>


          <CategoriesRightColumn>
          <CategoriesFormGroup>
            <CategoriesLabel htmlFor="images">Image</CategoriesLabel>
            <HelperDiv>
            <ProductUploadArea hasImage={!!image} onClick={handleUploadClick}>
              {!image && (
                <ImagesDiv>
                  <CategoriesUploadIcon>
                    <MdCloudUpload />
                  </CategoriesUploadIcon>
                  <CategoriesUploadText>
                    Drop files here to upload
                  </CategoriesUploadText>
                </ImagesDiv>
              )}
              {image && (
                <div>
                  <CategoriesImagePreview>
                    <img src={image} alt="Uploaded Preview" />
                  </CategoriesImagePreview>
                  <CategoriesRemoveLink onClick={handleRemoveImage} href="#">
                    Remove file
                  </CategoriesRemoveLink>
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
            <CategoriesHelperText>Insert image in SVG format</CategoriesHelperText>
            </HelperDiv>
          </CategoriesFormGroup>
          <MediaButton variant="outlined">From Media</MediaButton>
          </CategoriesRightColumn>
          </CategoriesFormContainer>
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
const TabsContainer: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("create");
    const router = useRouter();
  
    const handleTabChange = (newTab: string) => {
      setActiveTab(newTab);
      if (newTab === "categoriesList") {
        router.push("/inventory/categories");
      }
    };
  
    return (
      <Tabs
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "categoriesList",
            label: "Categories List",
            icon: <AiOutlineUnorderedList />,
          },
          { id: "create", label: "Create Categories", icon: <AiOutlinePlus /> },
        ]}
      />
    );
  };
  
  const CreateCategoriesComponents: React.FC = () => {
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
          <HeaderContent title="Categories" subtitle="Categories Management" />
          <CustomBreadcrumbs
            links={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Categories", href: "/inventory/categories" },
              { label: "Categories List" },
            ]}
          />
        </HeaderWrapper>
        <ContentWrapper>
          <TabsContainer />
          <CategoriesFields
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
  
  export default CreateCategoriesComponents;
  