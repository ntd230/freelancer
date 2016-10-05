import React, {Component} from 'react'; 
import { reactStyle, SemanticUI } from 'react-atomic-molecule';
import { pageStore } from 'reshow'; 
import { PageHeader } from 'pmvc_react_landing';
import Brand from '../organisms/Brand'; 
import HeaderNav from '../organisms/HeaderNav'; 

class Header extends Component 
{
    render(){
        const pageState = pageStore.getState();
        return (
            <PageHeader>
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
            </PageHeader>
        );
    }
}

const Styles = {
    headerNav: {
        display: 'inline-block'
    }
};


export default Header;
