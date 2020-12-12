import React from 'react'

import { Box } from '@chakra-ui/core'

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        transition: '.3s',
        h: '100%',
        background: 'gradient',
    },
    main: {
        flex: 1,
    },
    overlay: {
        w: '100%',
        h: '100%',
        position: 'fixed',
        zIndex: 'overlay',
        top: 0,
        left: 0,
    },
}

const LayoutGeneral = ({ children, overlay }) => {
    return (
        <Box
            {...styles.wrapper}
        >
            {overlay && <Box {...styles.overlay}>{overlay}</Box>}
            <Box as="main" {...styles.main}>
                {children}
            </Box>
        </Box>
    )
}

export default LayoutGeneral