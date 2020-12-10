import React from 'react'
import Head from 'next/head'

// import local Chacra theme, which feeds variables to Chakra ui components
import { localTheme } from 'theme/theme'
import { ThemeProvider } from 'emotion-theming'
import { CSSReset } from '@chakra-ui/core'


const App = (props) => {
    const { Component: ActivePage, ...pageProps } = props

    return (
            <ThemeProvider theme={localTheme}>
                <CSSReset />
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <ActivePage {...pageProps} />
            </ThemeProvider>
    )
}

export default App