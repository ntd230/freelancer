import React, {Component} from 'react'; 
import Freelancer from '../templates/Freelancer'; 
import { ContentWrapper, ContentBlock} from 'pmvc_react_landing';
import { pageStore } from 'reshow'; 
import Geometryangle from 'react-organism-geometryangle';
import Me from '../organisms/Me';

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
        return (
            <ContentWrapper>
                <ContentBlock style={{height:"600px"}}>
                    {state.me} 
                    {state.geometryangle} 
                </ContentBlock>
            </ContentWrapper>
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
};
