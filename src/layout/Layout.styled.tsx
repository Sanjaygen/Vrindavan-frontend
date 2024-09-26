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
    ${breakpoints.lg} {
        display: block;
        height: 100%;
        width: 24.4%;
    }
    ${breakpoints.xl}{
        width: 18.7%;
    } 
    ${breakpoints['2xl']} {
    width: 17.8%;
    }
`;

export const PageWrapper = styled('div')`
    flex-basis: 82%;
    padding: 0px 0px 20px 0px;
    margin-top: 8%;

    ${breakpoints.xs} {
        margin-top: 0%;
        margin-left: 0%;
    }
    ${breakpoints.md} {
        margin-top: 0%;
        margin-left: 0%;
    }

    ${breakpoints.lg} {
        margin-top: 0%;
         margin-left: 250px;
    }
    ${breakpoints.xl} {
        margin-top: 0%;
        margin-left: 271px;
    }
`;

export const FooterWrap = styled("div")`
    margin-top: 4.5%;
`
export const DrawerStyled = styled(Drawer)<{ showDrawer?: boolean }>`
    display: ${({ showDrawer }) => (showDrawer ? 'block' : 'none')};

    ${breakpoints.xs} {
        display: block;
        z-index: 9999;
    }
     ${breakpoints.lg} {
        display: none;
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
    ${breakpoints.lg} {
        background-color: primary;
        color: white;
        height: '100%'
    },

   ${breakpoints.xl} {
        background-color: primary;
        color: white;
        height: '100%'
    }
`;