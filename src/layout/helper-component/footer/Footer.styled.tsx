import breakpoints from '@/themes/breakpoints';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const FooterWrapper = styled('footer')<{ bgColor: string; isFixed: boolean }>`
    position: ${({ isFixed }) => (isFixed ? 'static' : 'relative')};
    bottom: 0;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background-color: ${({ bgColor }) => bgColor};
    border-top: 1px solid #ddd;
    z-index: 100;
    ${breakpoints.xs}{
        flex-direction: column;
        align-items: start;
    }
    ${breakpoints.sm}{
        flex-direction: row;
        align-items: center;
    }
`;

export const LeftSection = styled('div')`
    display: flex;
    align-items: center;
    gap: 8px;
    ${breakpoints.xs}{
        flex-direction: column;
        align-items: start;
    }
    ${breakpoints.sm}{
        flex-direction: row;
        align-items: center;
    }
`;

export const CopyTypo = styled(Typography)`
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #555;
    margin-left: 5px;
    ${breakpoints.xs}{
        font-size: 14px;
        margin-left: 0px;
    }
    ${breakpoints.sm}{
        font-size: 14px;
    }
    ${breakpoints.md}{
        font-size: 16px;
    }
    ${breakpoints.lg}{
        font-size: 20px;
    }
`
export const LinkTag = styled(Link)`
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #007BFF;
    underline: none;
    margin-left: 5px;
    &:hover{
       color: #0063c5;
    }
    ${breakpoints.sm}{
        font-size: 14px;
    }
    ${breakpoints.md}{
        font-size: 16px;
    }
    ${breakpoints.lg}{
        font-size: 18px;
    }
`
export const RightsTypo = styled(Typography)`
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #555;
    ${breakpoints.sm}{
        font-size: 14px;
    }
    ${breakpoints.md}{
        font-size: 16px;
    }
    ${breakpoints.lg}{
        font-size: 18px;
    }
`
export const VersionTypo = styled(Typography)`
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #555;
    span{
       font-weight: 400;
    }
    ${breakpoints.sm}{
        font-size: 14px;
    }
    ${breakpoints.md}{
        font-size: 16px;
    }
    ${breakpoints.lg}{
        font-size: 18px;
    }
`

export const RightSection = styled('div')`
    display: flex;
    align-items: center;
`;
