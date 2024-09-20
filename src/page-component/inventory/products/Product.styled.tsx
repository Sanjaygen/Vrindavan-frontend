import breakpoints from "@/themes/breakpoints";
import Link from "next/link";
import { styled } from "styled-components";


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  ${breakpoints.xs}{
    flex-direction: column;
  }
  ${breakpoints.sm}{
    flex-direction: row;
  }
`;

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
  }
  ${breakpoints.lg}{
    font-size: 25px;
    span{
     font-size: 22px;
     margin-left:10px;
  }
  }
`;

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 35px;
  margin-top: 20px;
`;

export const BreadcrumbItem = styled.span`
  font-family: Poppins,sans-sereif;
  font-size: 20px;
  font-weight: 400;
  color: #343A40;
  display: flex;
  align-items: center;
  margin-right: 8px;

  &:not(:last-child)::after {
    content: "/";
    margin-left: 8px;
    color: #999;
  }
  ${breakpoints.xs}{
    font-size: 15px;
  }
  ${breakpoints.sm}{
    font-size: 15px;
  }
  ${breakpoints.lg}{
    font-size: 25px;
  }
`;

export const BreadcrumbLink = styled(Link)`
  font-family: Poppins,sans-sereif;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
  ${breakpoints.xs}{
    font-size: 15px;
  }
  ${breakpoints.sm}{
    font-size: 15px;
  }
  ${breakpoints.lg}{
    font-size: 25px;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 4px;
  color: #007bff;
`;