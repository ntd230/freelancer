import React, {Component} from 'react'; 

import { pageStore } from 'reshow'; 

const Footer = (props) => { 
    const pageState = pageStore.getState();
    const I18N = pageState.get('I18N').toJS();
    return (
    <div style={Styles.container}>
        {I18N.footerText}
    </div>
    )
};
export default Footer;

const Styles = {
    container: {
        minHeight: 150,
        background: '#000',
        lineHeight: '150px',
        fontSize: '.75rem',
        color: '#afafaf',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.069rem'
    }
};
