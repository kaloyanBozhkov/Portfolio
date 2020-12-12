import React from 'react'
import { Flex} from '@chakra-ui/core'
import LandingSection from '~/components/LandingSection/LandingSeciton'
import AboutMeSection from '~/components/AboutMeSection/AboutMeSection'

const styles = {
    homeWrapper: {
        flexDir: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        h: '100vh',
        overflow: 'auto',
    },
}

const Home = () => {
    return (
        <Flex {...styles.homeWrapper}>
            <LandingSection />
            <AboutMeSection />
        </Flex>
    )
}

export default Home