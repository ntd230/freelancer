import React, {Component} from 'react'; 
import Freelancer from '../templates/Freelancer'; 
import { ContentWrapper, ContentBlock, SplashBlock } from 'pmvc_react_landing';
import { SemanticUI } from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import Geometryangle from 'organism-react-geometryangle';
import Me from '../organisms/Me';
import Introduce from '../organisms/Introduce';
import HeaderContent from '../organisms/HeaderContent';
import Portfolio from '../organisms/Portfolio';

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
                <SplashBlock>
                    {state.me}
                    {state.geometryangle}
                    <Introduce {...introduce} />
                </SplashBlock>
                <ContentWrapper style={Styles.contentWrapper}>
                    <HeaderContent {...section.design} />
                    <Portfolio />
                    
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
    }
};
