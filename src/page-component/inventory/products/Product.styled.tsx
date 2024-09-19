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
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;

  &:not(:last-child)::after {
    content: "/";
    margin-left: 8px;
    color: #999;
  }
`;

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #0056b3;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 4px;
  color: #007bff;
`;