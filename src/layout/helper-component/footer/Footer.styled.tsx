import { styled } from '@mui/material/styles';

export const FooterWrapper = styled('footer')<{ bgColor: string; isFixed: boolean }>`
    position: ${({ isFixed }) => (isFixed ? '' : 'unset')};
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background-color: ${({ bgColor }) => bgColor};
    border-top: 1px solid #ddd; 
`;

export const LeftSection = styled('div')`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RightSection = styled('div')`
    display: flex;
    align-items: center;
`;
