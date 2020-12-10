import React from 'react'

// import App wrapper
import App from './App'

// import general styles that normalize app throughout
import 'theme/general.scss'

// import actual page we're on
import HomePage from './Home/Home.page'


const Index = (props) => {
    console.log('index props', props)

    return (
        <App>
            <HomePage />
        </App>
    )
}

export const getStaticProps = () => {

    // @TODO get from database
    const aboutMeText = `Hello, I am Ventsi and I am a digital creator focused on UX/UI and Web Design`

    return {
        props: {
            aboutMeText
        },
    }
}

export default Index