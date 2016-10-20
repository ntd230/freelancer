import React, {Component} from 'react'; 
import { ContentWrapper, ContentBlock, SplashBlock } from 'pmvc_react_landing';
import { SemanticUI } from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import Geometryangle from 'organism-react-geometryangle';
import { ScrollSpy } from 'organism-react-scroll-nav';

import HeaderContent from '../molecules/HeaderContent';
import Me from '../organisms/Me';
import Introduce from '../organisms/Introduce';
import Portfolio from '../organisms/Portfolio';
import AboutMe from '../organisms/AboutMe';
import SkillSet from '../organisms/SkillSet';
import Freelancer from '../templates/Freelancer'; 

class Body extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            me: null,
            geometryangle: null 
        };
    }

    componentDidMount()
    {
        this.setState({
            me: <Me />,
            geometryangle: <Geometryangle /> 
        });
    }

    render()
    {
        const pageState = pageStore.getState();
        const I18N = pageState.get('I18N').toJS();
        const state = this.state;
        const introduce = pageState.get('introduce').toJS();
        const section = pageState.get('section').toJS();
        return (
            <SemanticUI>
                <SplashBlock style={Styles.cover}>
                    {state.me}
                    {state.geometryangle}
                    <Introduce {...introduce} />
                </SplashBlock>
                <ContentWrapper style={Styles.contentWrapper}>
                    <ScrollSpy id="slogan">
                        <HeaderContent {...section.design} />
                        <Portfolio {...section.portfolio} />
                    </ScrollSpy>
                    <ScrollSpy id="aboutme">
                        <AboutMe {...section.aboutme} />
                        <SkillSet {...section.skillset} />
                    </ScrollSpy>
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
    cover: {
        minHeight: 350
    }


};
