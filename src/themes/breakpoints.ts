import { ScreenSize } from "./screen.config";

const screenWidths = Object.values(ScreenSize);

const breakpointsMinWidth = {
    xs: `(min-width: ${screenWidths[0]}px)`, // (320+) Mobile screen
    sm: `(min-width: ${screenWidths[1]}px)`, // (576+),portrait, tablet, small desktop screen
    md: `(min-width: ${screenWidths[2]}px)`, // (768+) //landscape, medium desktop screen
    lg: `(min-width: ${screenWidths[3]}px)`, // (1024+), large desktop screen
    xl: `(min-width: ${screenWidths[4]}px)`, // (1440+, extra) large desktop screen
    '2xl': `(min-width: ${screenWidths[5]}px)` // (1536+, extra) large desktop screen
};

const breakpoints = {
    xs: `@media screen and ${breakpointsMinWidth.xs}`,
    sm: `@media screen and ${breakpointsMinWidth.sm}`,
    md: `@media screen and ${breakpointsMinWidth.md}`,
    lg: `@media screen and ${breakpointsMinWidth.lg}`,
    xl: `@media screen and ${breakpointsMinWidth.xl}`,
    '2xl': `@media screen and ${breakpointsMinWidth['2xl']}`
};

export default breakpoints;