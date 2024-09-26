import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  IconWrapper,
} from "./BreadCrumbs.styled";

interface BreadcrumbsProps {
  links: { label: string; href?: string }[];
}

const CustomBreadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => (
  <BreadcrumbContainer>
    {links.map((link, index) => (
      <BreadcrumbItem key={index}>
        {index === 0 && (
          <IconWrapper>
            <AiFillDashboard />
          </IconWrapper>
        )}
        <BreadcrumbLink href={link.href || "#"}>{link.label}</BreadcrumbLink>
      </BreadcrumbItem>
    ))}
  </BreadcrumbContainer>
);

export default CustomBreadcrumbs;