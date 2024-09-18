import breakpoints from "@/themes/breakpoints";
import { Box, Drawer } from "@mui/material";
import { styled } from "styled-components";


//layout
export const LayoutContainer = styled(Box)`
    // position: relative;
`;
export const SideNavWrapper = styled(Box)`
    position: fixed;
    top: 0;
    width: 18%;
    align-items: flex-start;
    background-color: white;
    color: black;
    border-radius: 0px;
    margin: 0px 0px 0px 0px;
    flex-wrap: wrap;
    z-index:9999;
    box-shadow: 0px 14px 10px 0px rgba(34, 37, 169, 0.40);

    ${breakpoints.xs} {
        display: none;
    }
    ${breakpoints.sm} {
        display: none;
    }
    ${breakpoints.md} {
        display: block;
        height: 100%;
    }
`;

export const PageWrapper = styled('div')`
    flex-basis: 82%;
    margin-left: 20%;
    padding: 0px 30px 20px 20px;
    margin-top: 8%;

    ${breakpoints.xs} {
        margin-top: 30%;
        margin-left: 0%;
    }
    ${breakpoints.sm} {
        margin-top: 15%;
        margin-left: 0%;
    }
   ${breakpoints.md} {
        margin-top: 12%;
        margin-left: 20%;
    }

    ${breakpoints.md} {
        margin-top: 8%;
        margin-left: 20%;
    }
`;
export const DrawerStyled = styled(Drawer)<{ showDrawer?: boolean }>`
    display: ${({ showDrawer }) => (showDrawer ? 'block' : 'none')};

    ${breakpoints.xs} {
        display: block;
        z-index: 9999;
    }
     ${breakpoints.md} {
        display: block;
        z-index: 9999;
    }
`;
export const PageBox = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 3%;
`;
export const SideNavDrawer = styled(Box)`
    ${breakpoints.md} {
        background-color: primary;
        color: white;
        height: '100%'
    },

   ${breakpoints.lg} {
         background-color: primary;
        color: white;
        height: '100%'
    }
`;