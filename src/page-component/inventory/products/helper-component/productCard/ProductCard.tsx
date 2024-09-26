"use client";
import CustomDropdown from "@/ui-components/dropdown/CustomDropDown";
import {
  ButtonStyle,
  CardLabel,
  SmallCardContainer,
  LabelDropdownContainer,
  ButtonsContainer,
  TypographyCount,
  TypographyOr,
} from "./ProductCard.styled";


const SmallCard = () => {
  return (
    <SmallCardContainer>
      <LabelDropdownContainer>
        <CardLabel htmlFor="producttype">Products</CardLabel>
        <CustomDropdown
          options={["Milk", "Cake", "Nuts"]}
          placeholder="All Products"
          onChange={(value) => console.log("Selected Product Type:", value)}
          width={"93%"} dropdownWidth={"203px"} listWidth={"203px"} iconRight={"12px"}
        />
      </LabelDropdownContainer>
      <ButtonsContainer>
        <ButtonStyle color="#28a745">
          <div>
            <TypographyOr>108</TypographyOr>
            <TypographyCount>In Stock</TypographyCount>
          </div>
        </ButtonStyle>
        <ButtonStyle color="#ffc107">
          <div>
            <TypographyOr>82</TypographyOr>
            <TypographyCount>Low Stock</TypographyCount>
          </div>
        </ButtonStyle>
        <ButtonStyle color="#dc3545">
          <div>
            <TypographyOr>77</TypographyOr>
            <TypographyCount>Out Of Stock</TypographyCount>
          </div>
        </ButtonStyle>
      </ButtonsContainer>
    </SmallCardContainer>
  );
};

export default SmallCard;
