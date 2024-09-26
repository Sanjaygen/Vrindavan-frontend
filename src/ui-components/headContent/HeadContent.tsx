import React from "react";
import { HeaderTitle } from "./HeadContent.styled";

interface HeaderContentProps {
  title: string;
  subtitle: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ title, subtitle }) => (
  <HeaderTitle>
    {title} | <span>{subtitle}</span>
  </HeaderTitle>
);

export default HeaderContent;
