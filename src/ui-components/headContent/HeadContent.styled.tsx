import breakpoints from "@/themes/breakpoints";
import { styled } from "styled-components";

export const HeaderTitle = styled.div`
  font-family: Poppins,sans-sereif;
  font-size: 25px;
  font-weight: 400;
  color: #343A40;
  margin-left: 20px;
  margin-top: 20px;
  span{
     font-size: 22px;
     margin-left:10px;
  }
  ${breakpoints.sm}{
    font-size: 15px;
    span{
     font-size: 13px;
     margin-left:10px;
  }
  ${breakpoints.lg}{
    font-size: 22px;
    margin-left: 30px;
    span{
     font-size: 20px;
     margin-left:10px;
  }
`;