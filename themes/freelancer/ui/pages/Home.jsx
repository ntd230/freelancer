import React, {Component} from 'react'; 
import Freelancer from '../templates/Freelancer'; 
import { ContentWrapper, ContentBlock} from 'pmvc_react_landing';
import { pageStore } from 'reshow'; 

class Body extends Component
{
    render()
    {
        const pageState = pageStore.getState();
        const I18N = pageState.get('I18N').toJS();
        return (
            <ContentWrapper>
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
