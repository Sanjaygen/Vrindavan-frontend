'use client';
import {
  Button,
  ButtonsContainer,
  SecondaryButton,
  StyledHr,
} from "@/page-component/inventory/products/helper-component/createProduct/CreateProduct.styled";

import FormInput from "@/ui-components/forms/input";
import { IoIosSave } from "react-icons/io";
import { FaUndo } from "react-icons/fa"; 
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/ui-components/forms/regex";
import CustomDropdown from "@/ui-components/dropdown/CustomDropDown";
import { AddCustomerContainer, AddCustomerFormGroup, AddCustomerLabel, CustomDropdownPart, CustomWidth, StyledTextArea } from "../CreateCustomer.styled";


interface FormData {
    name: string;
    email: string;
    mobile: number;
    houseno: string;
    companyAddress: string;
    locality: string;
    status: string;
  }
const CreateAddCustomerComponents = () => {
  const { control, handleSubmit,setValue, formState: { errors, dirtyFields } } = useForm<FormData>();

  const onSubmit = (data: unknown) => {

    console.log(data);
  };

  return (
    <>
      <AddCustomerContainer>
      <AddCustomerFormGroup>
          <AddCustomerLabel htmlFor="locality">Locality *</AddCustomerLabel>
          <CustomDropdownPart>
            <CustomDropdown
              options={["Locality 1", "Locality 2", "Locality 3"]}
              placeholder="All Locality"
              onChange={(value) => setValue("locality", value)}
              width={""}
              dropdownWidth={""}
              listWidth={""}
              iconClassName="custom-icon-right"
              widthClassName="custom-width"
            />
          </CustomDropdownPart>
        </AddCustomerFormGroup>
        <AddCustomerFormGroup>
          <AddCustomerLabel htmlFor="name">Name *</AddCustomerLabel>
          <CustomWidth>
            <FormInput
              name="name"
              width={""}
              control={control}
              placeholder="Enter Name"
              className="width-alter"
              rules={{
                required: {
                  value: true,
                  message: "Name is required",
                },
              }}
              showCheckIcon={!errors.name && dirtyFields.name}
              errorText={errors.name ? errors.name.message : ""}
            />
            </CustomWidth>
        </AddCustomerFormGroup>
        <AddCustomerFormGroup>
          <AddCustomerLabel htmlFor="email">Email *</AddCustomerLabel>
          <CustomWidth>
          <FormInput
            name="email"
            width={""} 
            control={control}
            className="width-alter"
            placeholder="Enter Email ID"
            rules={{
              pattern: {
                value: EMAIL_REGEX,
                message: "Please enter a valid Email ID",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            }}
            showCheckIcon={!errors.email && dirtyFields.email}
            errorText={errors?.email?.message}
          />
          </CustomWidth>
        </AddCustomerFormGroup>
        <AddCustomerFormGroup>
          <AddCustomerLabel htmlFor="mobile">Mobile *</AddCustomerLabel>
          <CustomWidth>
          <FormInput
              name="mobile"
              width={""}
              className="width-alter"
              control={control}
              type={"number"}
              placeholder="Enter Mobile Number"
              rules={{
                required: {
                  value: true,
                  message: "Mobile Number is required",
                },
              }}
              showCheckIcon={!errors.mobile && dirtyFields.mobile}
              errorText={errors?.mobile?.message}
            />
            </CustomWidth>
        </AddCustomerFormGroup>
        <AddCustomerFormGroup>
          <AddCustomerLabel htmlFor="houseno">House no</AddCustomerLabel>
          <CustomWidth>
            <FormInput
              name="houseno"
              width={""}
              className="width-alter"
              control={control}
              placeholder="Enter House No"
              rules={{
                required: {
                  value: true,
                  message: "House No is required",
                },
              }}
              showCheckIcon={!errors.houseno && dirtyFields.houseno}
              errorText={errors.houseno ? errors.houseno.message : ""}
            />
            </CustomWidth>
        </AddCustomerFormGroup>
        <AddCustomerFormGroup>
          <AddCustomerLabel htmlFor="companyAddress">Company Address *</AddCustomerLabel>
          <StyledTextArea
            placeholder="Enter Company Address"
            {...control.register("companyAddress", {
              required: "Company address is required",
            })}
          />
          {errors?.companyAddress && (
            <span>{errors?.companyAddress?.message}</span>
          )}
        </AddCustomerFormGroup>
        <AddCustomerFormGroup>
        <AddCustomerLabel htmlFor="status">Status</AddCustomerLabel>
        <CustomDropdownPart>
        <CustomDropdown
              options={["Milk", "Cake", "Dairy"]}
              placeholder="Select Product Type"
              onChange={(value) => setValue("status", value)}
              width={""}
                dropdownWidth={""}
                listWidth={""}
                iconClassName="custom-icon-right" 
                widthClassName="custom-width"
            />
            </CustomDropdownPart>
            </AddCustomerFormGroup>
      </AddCustomerContainer>
      <StyledHr />
      <ButtonsContainer>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          <IoIosSave />
          Save Customer
        </Button>
        <SecondaryButton>
          <FaUndo />
          Cancel
        </SecondaryButton>
      </ButtonsContainer>
    </>
  );
};


export default CreateAddCustomerComponents;
