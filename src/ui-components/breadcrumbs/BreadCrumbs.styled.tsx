
import breakpoints from "@/themes/breakpoints";
import Link from "next/link";
import { styled } from "styled-components";

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
    font-size: 20px;
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
    font-size: 20px;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 4px;
  color: #007bff;
`;

