import React from 'react'
import { Flex, Grid, Text } from '@chakra-ui/core'

const styles = {
    aboutMeWrapper: {
        marginTop: '30rem',
        flexDir: 'column',
        flex: '1',
        bg: 'white',
        w: '100%',
        p: '3.5rem 2.5rem'
    },
    heading: {
        fontSize: 'xl',
        marginBottom: '3rem'
    },
    sectionWrapper: {
        fontSize: 'lg',
        gridTemplateColumn: '1fr',
        gap: '2rem',
        marginBottom: '10rem'
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        fontWeight: 'medium',
    },
    description: {
        fontWeight: 'normal'
    }
}

const aboutMe = [
    {
        title: 'Education:',
        subTitle: 'Industrial design',
        description: 'I’ve been studing Industrial design in the Technical University of Varna'
    },
    {
        title: 'Work background:',
        subTitle: 'Team lead Customer service',
        description: 'During my education I was working as Customer service representative and after this I was leading a team for some time.'
    },
    {
        title: 'Future goals:',
        subTitle: 'Design Career',
        description: `Coming from the service background I have developed excellent comunication skills and good understanding of empathy.
        <br/>
        As visual creator these two skills alone help me understand what client and users needs are. 
        <br/>
        I’m open to job opportunities to start my designer journey and the direction I have set is to become a leader of creative minds and help all of them be better at what they love doing.`
    }
]
const AboutMeSection = () => {

    return (
        <Flex {...styles.aboutMeWrapper} id="aboutMe">
            <Text {...styles.heading}>About Me</Text>
            {aboutMe.map(({ title, subTitle, description }) => (
                <Grid {...styles.sectionWrapper} >
                    <Text {...styles.title}>{title}</Text>
                    <Text {...styles.subtitle}>{subTitle}</Text>
                    <Text {...styles.description}>{description
                        .split('<br/>')
                        .map((desc, index) => (
                            <React.Fragment key={index}>
                                {desc}
                                <br />
                            </React.Fragment>
                        ))
                    }</Text>
                </Grid>
            ))}
        </Flex>
    )
}

export default AboutMeSection