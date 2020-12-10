import React from 'react'
import { Box, Flex, Grid, Text } from '@chakra-ui/core'
import Icon from '~/components/UI/Icon/Icon'


const styles = {
    homeWrapper: {
        flexDir: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        background: 'gradient',
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
            base: 'max'
        },
        lineHeight: {
            xs: '40px',
            base: '86px'
        },
        fontWeight: 'bold'
    },
    description: {
        color: 'text.300',
        fontSize: {
            xs: 'lg',
            base: 'xl'
        },
        maxWidth: '55rem',
        marginTop: '5rem'
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
        bg: 'text.300',
        width: '100%'
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
        gap: '5rem'
    },
    arrowBodyStart: {
        width: '5rem',
        h: '2px',
        bg: 'text.300'
    },
    arrowWrapperModifier: {
        position: 'relative',
        h: '5rem'
    },
    arrowModifier: {
        w: '100%',
        alignItems: 'center',
        transform: 'translateX(-50%) translateY(50%) rotate(90deg)',
        position: 'absolute',
        left: '5rem', // arrowBodyStart w
        top: '216px' // 420 / 2 (half of arrow body) + 6 (half of arrow pointer)
    }
}


const Home = () => {

    return (
        <Flex {...styles.homeWrapper}>
            <Flex {...styles.introArea}>
                <Text {...styles.title}>
                    Ventsislav
                    <br />
                    Georgiev
                </Text>
                <Text {...styles.description}>
                    Hello, I am Ventsi and I am a digital creator focused on UX/UI and Web Design
            </Text>
            </Flex>

            <Flex>
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
                            <Box {...styles.arrowBody} />
                            <Box  {...styles.arrowPointer}>
                                <Icon icon="chevronRight" />
                            </Box>
                        </Flex>
                    </Flex>
                </Grid>
            </Flex>
        </Flex>
    )
}

export default Home