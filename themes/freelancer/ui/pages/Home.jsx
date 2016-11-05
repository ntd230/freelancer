import React, {Component} from 'react'; 
import { ContentWrapper, ContentBlock } from 'pmvc_react_landing';
import { SemanticUI } from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import { ScrollSpy } from 'organism-react-scroll-nav';
import ScrollAnimate from 'organism-react-scroll-animate';

import HeaderContent from '../molecules/HeaderContent';
import Cover from '../organisms/Cover';
import Portfolio from '../organisms/Portfolio';
import AboutMe from '../organisms/AboutMe';
import SkillSet from '../organisms/SkillSet';
import Experience from '../organisms/Experience';
import Contact from '../organisms/Contact';
import Freelancer from '../templates/Freelancer'; 
import Footer from '../organisms/Footer'; 

class Body extends Component
{

    render()
    {
        const pageState = pageStore.getState();
        const I18N = pageState.get('I18N').toJS();
        const state = this.state;
        const introduce = pageState.get('introduce').toJS();
        const section = pageState.get('section').toJS();
        return (
            <SemanticUI>
                <Cover introduce={introduce}/>
                <ContentWrapper style={Styles.contentWrapper}>
                    <ScrollSpy id="design">
                        <HeaderContent {...section.design} />
                        <Portfolio {...section.portfolio} />
                    </ScrollSpy>
                    <ScrollSpy id="about-me">
                        <AboutMe {...section.aboutme} />
                        <SkillSet {...section.skillset} />
                    </ScrollSpy>
                    <ScrollAnimate id="experience" testScrollTo={true}>
                    {()=>
                       <Experience {...section.experience}/> 
                    }
                    </ScrollAnimate>
                    <ScrollSpy id="contact">
                        <Contact {...section.contact} />
                    </ScrollSpy>
                    <Footer />
                </ContentWrapper>
            </SemanticUI>
        );
    }
}

class Home extends Component
{
    render()
    {
        let body = <Body />;
        return (
            <Freelancer
                body={body}
            />
        );
    }
}

export default Home;

const Styles = {
    contentWrapper: {
        top: '100%'
    },
};
