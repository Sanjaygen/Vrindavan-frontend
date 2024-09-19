// components/HeaderContainer.tsx
import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface HeaderContainerProps {
  title: string;
  subtitle: string;
}

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderContainer = ({ title, subtitle }:HeaderContainerProps) => {
  return (
    <Header>
      <Typography component="span" className="category">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="span" className="separator">
        {" | "}
      </Typography>
      <Typography variant="subtitle1" component="span" className="management">
        {subtitle}
      </Typography>
    </Header>
  );
};

export default HeaderContainer;
