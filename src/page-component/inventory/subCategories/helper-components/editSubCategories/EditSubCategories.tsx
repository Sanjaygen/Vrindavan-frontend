'use client';
import { Button, ButtonsContainer, CreateProductWrapper, CustomDropdownWrapper, ProductUploadArea, SecondaryButton, StyledHr } from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";
import { ContentWrapper, HeaderWrapper } from "@/page-component/inventory/products/Product.styled";
import CustomBreadcrumbs from "@/ui-components/breadcrumbs/BreadCrumbs";
import HeaderContent from "@/ui-components/headContent/HeadContent";
import Tabs from "@/ui-components/tabs/Tabs";
import { useRouter } from "next/navigation";
import { useEffect, useRef} from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { FaPencilAlt, FaUndo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import {  CategoriesFormContainer,CategoriesFormGroup, CategoriesHelperText, CategoriesImagePreview, CategoriesLabel, CategoriesLeftColumn, CategoriesRemoveLink, CategoriesRightColumn, CategoriesUploadIcon, CategoriesUploadText, HelperDiv, ImagesDiv, MediaButton } from "@/page-component/inventory/categories/Categories.styled";
import FormInput from "@/ui-components/forms/input";
import NoteToolbar from "@/page-component/inventory/products/helper-component/createProduct/NoteToolbar";
import { MdCloudUpload } from "react-icons/md";
import { useSubCategoriesById, useUpdateSubCategories } from "@/hooks/useSubCategories";
import CustomDropdown from "@/ui-components/dropdown/CustomDropDown";
import { SubCategoriesProps } from "@/service/types";
interface EditCategoriesProps {
    subCategoriesId: number;
}
const EditSubCategoriesBox: React.FC<{
  subCategory: SubCategoriesProps | null;
  onSave: (data: { id: number; payload: SubCategoriesProps }) => void;
}> = ({ subCategory, onSave }) => {
  console.log('as',subCategory);

    // if (category && Array.isArray(category)) {
    //   console.log('category names', category.map((x) => x.name || null));
    // } else {
    //   console.log('No categories available');
    // }
    // console.log('saaaaaaaaa', category[0].name);
    

  const { control, handleSubmit, setValue, watch, reset } = useForm<SubCategoriesProps>({
    defaultValues: {
    category_name: "",
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
    if (subCategory) {
      reset({
        category_name: subCategory.category_name || "",
        name: subCategory.name || "",
        description: subCategory.description || "",
        weightage: subCategory.weightage || "",
        image: subCategory.image || null,
      });
    }
  }, [subCategory, reset]);
  const onSubmit = (data: SubCategoriesProps) => {
    if (subCategory) {
      const payload = {
        ...data,
      };

      onSave({
        id: Number(subCategory.id), 
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
            <CategoriesLabel htmlFor="category_name">Category *</CategoriesLabel>
            <HelperDiv>
            <CustomDropdownWrapper>
            <CustomDropdown
              options={["Milk", "Cake", "Dairy"]}
              placeholder="Select Product Type"
              onChange={(value) => setValue("category_name", value)}
              width={"350px"}
                dropdownWidth={"350px"}
                listWidth={"350px"}
                iconClassName="custom-icon-right" 
            />
            </CustomDropdownWrapper>
            <CategoriesHelperText>Insert Category</CategoriesHelperText>
            </HelperDiv>
          </CategoriesFormGroup>
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
const TabsContainer: React.FC<{ subCategory: SubCategoriesProps | null }> = ({
    subCategory,
}) => {
  const router = useRouter();
  const { mutate: updateSubCategories } = useUpdateSubCategories();
console.log('edit',subCategory);

//   const handleTabChange = (newTab: string) => {
//     if (newTab === "subcategoriesList") {
//       router.push("/inventory/subCategories");
//     } else if (newTab === "create") {
//       router.push("/inventory/subCategories/create");
//     }
//   };
const handleTabChange = (newTab: string) => {
    router.push(newTab === "subcategoriesList" ? "/inventory/subCategories" : "/inventory/subCategories/create");
  };

  return (
    <ContentWrapper>
      <Tabs
        activeTab="edit"
        setActiveTab={handleTabChange}
        tabItems={[
          {
            id: "subcategoriesList",
            label: "SubCategories List",
            icon: <AiOutlineUnorderedList />,
          },
          { id: "create", label: "SubCreate Categories", icon: <AiOutlinePlus /> },
          { id: "edit", label: "Edit SubCategories", icon: <FaPencilAlt /> },
        ]}
      />
      <EditSubCategoriesBox
        subCategory={subCategory}
        onSave={({ id, payload }) => updateSubCategories({ id, payload })}
      />
    </ContentWrapper>
  );
};

const EditSubCategoriesComponent: React.FC<EditCategoriesProps> = ({ subCategoriesId }) => {
  console.log('subCategoriesId',subCategoriesId);
  
  const { data, isLoading, error } = useSubCategoriesById(subCategoriesId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>
console.log('123',data);

  return (
    <CreateProductWrapper>
       <HeaderWrapper>
    <HeaderContent title="SubCategories" subtitle="SubCategories Management" />
      <CustomBreadcrumbs
        links={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "SubCategories", href: "/inventory/subCategories" },
          { label: "Edit SubCategory" },
        ]}
      />
    </HeaderWrapper>
      <ContentWrapper>
        {data && <TabsContainer subCategory={data} />}
      </ContentWrapper>
    </CreateProductWrapper>
  );
};

export default EditSubCategoriesComponent;
 
