import React from 'react'

// Load components
import Layout from 'templates/LayoutBase'

// Load contianers

// this component is a wrapper for all pages, to keep common elements
class App extends React.Component {

    state = {
        aboutOpen: false,
    }

    toggleAbout = () => this.setState({ aboutOpen: !this.state.aboutOpen })

    render() {

        const {
            state: {
            },
            props: {
                children,
            },
            toggleAbout
        } = this


        return (
            <Layout>
                {children}
            </Layout>
        )
    }
}

export default App