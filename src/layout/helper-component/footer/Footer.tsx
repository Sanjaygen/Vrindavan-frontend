import { Typography, Link } from '@mui/material';
import { FooterWrapper, LeftSection, RightSection } from './Footer.styled';

type FooterProps = {
    bgColor: string;
    isFixed?: boolean;
};

const Footer = ({ bgColor, isFixed = false }: FooterProps) => {
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };

    return (
        <FooterWrapper bgColor={bgColor} isFixed={isFixed}>
            <LeftSection>
                <Typography variant="body1">Copyright @ {getCurrentYear()}</Typography>
                <Link href="https://example.com" color="primary" underline="none">
                    VrindavanFarm
                </Link>
                <Typography variant="body1">.All rights reserved</Typography>
            </LeftSection>
            <RightSection>
                <Typography variant="body1">Version 2.6.0</Typography>
            </RightSection>
        </FooterWrapper>
    );
};

export default Footer;
