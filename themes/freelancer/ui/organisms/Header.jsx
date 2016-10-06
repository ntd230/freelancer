import React from 'react'; 
import { reactStyle, SemanticUI } from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import { PageHeader } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';

import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 

const HandleScroll = (props)=>
{
    const {scrollInfo, ...others} = props;
    console.log(scrollInfo);
    return <PageHeader {...others} />;
}

const Header = (props)=>{
    const pageState = pageStore.getState();
    return (
        <ScrollReceiver
            targetId="slogan"
            container={<HandleScroll />}
            style={Styles.container}
        >
            <Brand 
                url={pageState.get('freelancerHost')}
                name={pageState.get('freelancerFirstName')}
                meta={pageState.get('freelancerLastName')}
            />
            <HeaderNav 
                style={Styles.headerNav}
                className="home-menu"
                nav={pageState.get('nav').toJS()}
            />
        </ScrollReceiver>
    );
};
export default Header;

const Styles = {
    headerNav: {
        display: 'inline-block',
        padding:0,
        margin:0
    },
    container: {
        padding: '3rem 0 0 3rem'
    }
};

