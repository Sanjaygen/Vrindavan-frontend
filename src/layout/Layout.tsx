'use client';
import { ReactNode, useState } from 'react';
import Header from './helper-component/header/Header';
import { DrawerStyled, FooterWrap, LayoutContainer, PageBox, PageWrapper, SideNavDrawer, SideNavWrapper } from './Layout.styled';
import SideNav from './helper-component/sidenav/SideNav';
// import BreadcrumbsPage from '@/page-components/breadcrumbs/Breadcrumbs';
import Footer from './helper-component/footer/Footer';

export type LayoutProps = {
    children: ReactNode;
};
const DashboardLayout = ({ children }: LayoutProps) => {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(prev => !prev);
    };
    return (
        <LayoutContainer>
            <SideNavWrapper>
                <SideNav toggleDrawer={toggleDrawer} />
            </SideNavWrapper>
            <PageWrapper>
                <Header toggleDrawer={toggleDrawer} />
                {/* <BreadcrumbsPage /> */}
                <PageBox>{children}</PageBox>
                {/* <FooterWrap>
                    <Footer bgColor={'white'} isFixed />
                </FooterWrap> */}
            </PageWrapper>
            <DrawerStyled
                showDrawer={showDrawer}
                title={''}
                open={showDrawer}
                onClick={toggleDrawer}
                anchor="left"
            >
                <SideNavDrawer>
                    <SideNav toggleDrawer={toggleDrawer} />
                </SideNavDrawer>
            </DrawerStyled>
        </LayoutContainer>
    );
};
export default DashboardLayout;