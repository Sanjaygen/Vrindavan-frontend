import { Typography, Link } from '@mui/material';
import { CopyTypo, FooterWrapper, LeftSection, LinkTag, RightSection, RightsTypo, VersionTypo } from './Footer.styled';

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
                <CopyTypo variant="body1">Copyright © {getCurrentYear()} 
                    <LinkTag href="https://example.com">
                        Vrindavan Farm.
                    </LinkTag>
                </CopyTypo>
                <RightsTypo variant="body1">All rights reserved</RightsTypo>
            </LeftSection>
            <RightSection>
                <VersionTypo variant="body1">Version <span>2.6.0</span></VersionTypo>
            </RightSection>
        </FooterWrapper>
    );
};

export default Footer;
