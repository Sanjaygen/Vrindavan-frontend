import breakpoints from "@/themes/breakpoints";
import { styled } from "styled-components";


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
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
