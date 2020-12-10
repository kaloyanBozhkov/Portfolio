import { theme } from '@chakra-ui/core'

// Chakra use mobile-first design so it uses min-widths breakpoints
/**
 * 20em: 320px small mobile
 * 30em: 480px mobile
 * 40em: 640px large phone / tablet
 * 56em: 900px large tablet
 * 80em: 1280px Standard deskop/laptop
 * 112.5em: 1800px large desktop
 */
const breakpoints = ['20em', '30em', '40em', '56em', '80em', '112.5em']

/**
 * REM TO PX CONVERSION
 * 
 * DESKTOP: 1rem = 10Px
 */

// aliases
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.mdX = breakpoints[3]
breakpoints.base = breakpoints[4]
breakpoints.lg = breakpoints[5]

// Import Chakra base theme and overide and set our variables
export const localTheme = {
    ...theme,
    breakpoints: breakpoints,
    background: {
        gradient: 'linear-gradient(180.36deg, #FF00F5 -59%, rgba(255, 255, 255, 0) 99.69%), linear-gradient(0deg, #782FD4, #782FD4)'
    },
    colors: {
        ...theme.colors,
        background: {       
            700: '#782fd4',
            500: '#ff00f5',
        },
        neutral: {
            900: '#4B4B4B',
            800: '',
            700: '',
            600: '',
            500: '',
            400: '',
            100: '',
        },
        text: {
            300: '#CCCCCC'
        },
        white: '#FFFFFF'

    },
    fonts: {
        body: 'FuturaMediumBT, Helvetica Neue, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
        heading: 'FuturaMediumBT, Helvetica Neue',
        mono: 'FuturaMediumBT, Menlo, monospace',
    },
    fontSizes: {
        ...theme.fontSizes,
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '36px',
        max: '72px'
    },
    fontWeights: {
        normal: 300,
        medium: 400,
        bold: 700
    },
    lineHeights: {
        tighter: '18px',
        tight: '22px',
        normal: '0',
        wide: '24px',
        wider: '32px',
        widest: '50px'
    },
    sizes: {
        ...theme.sizes,
        0: '0',
       
    },
    space: {
        ...theme.space,
        0: '0px',
       
    },
    zIndices: {
        ...theme.zIndices,
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        header: 1350,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },
    shadows: {
    }
}