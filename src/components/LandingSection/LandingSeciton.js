import React from 'react'
import { Box, Flex, Grid, Link, Text } from '@chakra-ui/core'
import Icon from '~/components/UI/Icon/Icon'


const styles = {
    landingSection: {
        flexDir: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        h: '100vh',
        paddingTop: {
            xs: '8rem',
            md: '11.5rem'
        },
        paddingLeft: {
            xs: '5.2rem',
            md: '9.2rem'
        },
        paddingRight: {
            xs: '5.2rem',
            md: '9.2rem'
        },
        paddingBottom: '13rem',
    },
    introArea: {
        flexDir: 'column',
    },
    title: {
        color: 'white',
        fontSize: {
            xs: 'xl',
            mdX: 'max'
        },
        lineHeight: {
            xs: '40px',
            mdX: '86px'
        },
        fontWeight: 'bold'
    },
    description: {
        color: 'text.300',
        fontSize: {
            xs: 'lg',
            mdX: 'xl'
        },
        maxWidth: '55rem',
        marginTop: {
            xs: '4rem',
            mdX: '5rem'
        }
    },
    arrowWrapper: {
        width: '420px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
        marginLeft: '5rem'
    },
    arrowBody: {
        h: '2px',
        width: '100%',
        bg: 'white'
    },
    arrowPointer: {
        position: 'relative',
        left: '-6px',
        fontSize: '12px',
    },
    textArrowGrid: {
        color: 'text.300',
        fontSize: '24px',
        marginTop: '8rem',
        gridTemplateColumns: '20rem 1fr',
        w: '42rem',
        alignItems: 'center',
        gap: '5rem',
        display: {
            xs: 'none',
            base: 'grid'
        }
    },
    arrowBodyStart: {
        width: '5rem',
        h: '2px',
        bg: 'white'
    },
    arrowWrapperModifier: {
        position: 'relative',
        h: '5rem'
    },
    arrowModifier: {
        w: '100%',
        alignItems: 'center',
        transform: 'translateX(-50%) rotate(90deg)',
        position: 'absolute',
        left: '5rem', // arrowBodyStart w
        top: '225px' // 420 / 2 (half of arrow body) + 6 (half of arrow pointer)
    },
    arrowModifierMobile: {
        left: '25rem',
    },
    arrowBodyModifier: {
        width: '25rem'
    },
    arrowBodyModifierMobile: {
        width: '5rem'
    },
    arrowBodyStartModifier: {
        width: '25rem'
    },
    hideDesktop: {
        display: {
            xs: 'block',
            base: 'none'
        },
    },
    learnMore: {
        marginTop: '1.5rem',
        color: 'white',
        textDecoration: 'underline',
        fontSize: 'sm',
        fontWeight: 'bold',
        lineHeight: 'tighter'
    },
    textArrowGridModifier: {
        gridTemplateColumns: '11rem 1fr',
        fontSize: 'sm',
        color: 'white',
        fontWeight: 'bold',
        gap: '0',
        display: {
            xs: 'grid',
            base: 'none'
        }
    },
}

const LandingSection = () => {
    return (
        <Flex {...styles.landingSection}>
            <Flex {...styles.introArea}>
                <Text {...styles.title}>
                    Ventsislav
                    <br />
                    Georgiev
                </Text>
                <Text {...styles.description}>
                    Hello, I am Ventsi and I am a digital creator focused on UX/UI and Web Design
                </Text>
                <Link {...styles.hideDesktop} {...styles.learnMore} href="#aboutMe">
                    Learn more
                </Link>
            </Flex>

            <Grid {...styles.textArrowGrid}>
                <Text>Select a project</Text>
                <Flex {...styles.arrowWrapper}>
                    <Box {...styles.arrowBody} />
                    <Box  {...styles.arrowPointer}>
                        <Icon icon="chevronRight" />
                    </Box>
                </Flex>
                <Text>About Me</Text>
                <Flex {...styles.arrowWrapper} {...styles.arrowWrapperModifier}>
                    <Box {...styles.arrowBodyStart} />
                    <Flex {...styles.arrowModifier}>
                        <Box {...styles.arrowBody} {...styles.arrowBodyModifier} />
                        <Box  {...styles.arrowPointer}>
                            <Icon icon="chevronRight" />
                        </Box>
                    </Flex>
                </Flex>
            </Grid>

            <Grid {...styles.textArrowGrid} {...styles.textArrowGridModifier}>
                <Text>Select a project</Text>
                <Flex {...styles.arrowWrapper} {...styles.arrowWrapperModifier}>
                    <Box {...styles.arrowBodyStart} {...styles.arrowBodyStartModifier} />
                    <Flex {...styles.arrowModifier} {...styles.arrowModifierMobile}>
                        <Box {...styles.arrowBody} {...styles.arrowBodyModifier}  {...styles.arrowBodyModifierMobile} />
                        <Box  {...styles.arrowPointer}>
                            <Icon icon="chevronRight" />
                        </Box>
                    </Flex>
                </Flex>
            </Grid>
        </Flex>
    )
}

export default LandingSection