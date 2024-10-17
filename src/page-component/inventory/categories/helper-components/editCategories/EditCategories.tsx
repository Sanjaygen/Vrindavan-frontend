import { useCategoriesById, useUpdateCategories } from "@/hooks/useCategories";
import { Button, ButtonsContainer, CreateProductWrapper, ProductUploadArea, SecondaryButton, StyledHr } from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";
import { ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import { CategoriesProps } from "@/service/types";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import Tabs from "@/ui-components/tabs/Tabs";
import { useRouter } from "next/navigation";
import { useEffect, useRef} from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { FaPencilAlt, FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { CategoriesFormContainer, CategoriesFormGroup, CategoriesHelperText, CategoriesImagePreview, CategoriesLabel, CategoriesLeftColumn, CategoriesRemoveLink, CategoriesRightColumn, CategoriesUploadIcon, CategoriesUploadText, HelperDiv, ImagesDiv, MediaButton } from "../../Categories.styled";
import FormInput from "@/ui-components/forms/input";
import NoteToolbar from "@/page-component/inventory/products/helper-component/createProduct/NoteToolbar";
import { MdCloudUpload } from "react-icons/md";
interface EditCategoriesProps {
  categoriesId: number;
}
const EditCategoriesBox: React.FC<{
  category: CategoriesProps | null;
  onSave: (data: { id: number; payload: CategoriesProps }) => void;
}> = ({ category, onSave }) => {
  console.log('as',category);

    // if (category && Array.isArray(category)) {
    //   console.log('category names', category.map((x) => x.name || null));
    // } else {
    //   console.log('No categories available');
    // }
    // console.log('saaaaaaaaa', category[0].name);
    

  const { control, handleSubmit, setValue, watch, reset } = useForm<CategoriesProps>({
    defaultValues: {
      name: "",
      description: "",
      weightage: "",
      image: null,
    },
  });


  const fileInputRef = useRef<HTMLInputElement>(null);
  const image = watch("image");

 
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };


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

 
  const handleRemoveImage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setValue("image", null);
  };
  useEffect(() => {
    if (category) {
      reset({
        name: category.name || "",
        description: category.description || "",
        weightage: category.weightage || "",
        image: category.image || null,
      });
    }
  }, [category, reset]);
  const onSubmit = (data: CategoriesProps) => {
    if (category) {
      const payload = {
        ...data,
      };

      onSave({
        id: Number(category.id), 
        payload,
      });
    } else {
      console.error("Invalid category ID");
    }
  };

  return (
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
                  required: { value: true, message: "Name is required" },
                }}
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
                onChange={onImageChange}
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
const TabsContainer: React.FC<{ category: CategoriesProps | null }> = ({
  category,
}) => {
  const router = useRouter();
  const { mutate: updateCategories } = useUpdateCategories();
console.log('edit',category);

  const handleTabChange = (newTab: string) => {
    if (newTab === "categoriesList") {
      router.push("/inventory/categories");
    } else if (newTab === "create") {
      router.push("/inventory/categories/create");
    }
  };

  return (
    <ContentWrapper>
      <Tabs
        activeTab="edit"
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "categoriesList",
            label: "Categories List",
            icon: <AiOutlineUnorderedList />,
          },
          { id: "create", label: "Create Categories", icon: <AiOutlinePlus /> },
          { id: "edit", label: "Edit Categories", icon: <FaPencilAlt /> },
        ]}
      />
      <EditCategoriesBox
        category={category}
        onSave={({ id, payload }) => updateCategories({ id, payload })}
      />
    </ContentWrapper>
  );
};

const EditCategoriesComponent: React.FC<EditCategoriesProps> = ({ categoriesId }) => {
  console.log('categoriesId',categoriesId);
  
  const { data, isLoading, error } = useCategoriesById(categoriesId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>
console.log('123',data);

  return (
    <CreateProductWrapper>
       <HeaderWrapper>
    <HeaderContent title="Categories" subtitle="Categories Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Categories", href: "/inventory/categories" },
          { label: "Edit Category" },
        ]}
      />
    </HeaderWrapper>
      <ContentWrapper>
        {data && <TabsContainer category={data} />}
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default EditCategoriesComponent;
 
