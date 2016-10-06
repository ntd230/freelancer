import React from 'react'; 
import { assign, reactStyle, SemanticUI } from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import { PageHeader } from 'pmvc_react_landing';
import { ScrollReceiver } from 'organism-react-scroll-nav';

import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 

const HandleScroll = (props)=>
{
    let {scrollInfo, style, ...others} = props;
    if (scrollInfo.active ||
        (!scrollInfo.isOnScreen && scrollInfo.isShown)
       ) {
       style = assign({}, style, Styles.containerActive);
    }
    return <PageHeader {...others} style={style} styles={ reactStyle({
        transition: ['padding 300ms linear'] 
    })} />;
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
        padding: '3.9rem 3rem 0'
    },
    containerActive: {
        padding: '1.75rem 1.75rem 1.875rem',
        background: '#000'
    }
};

