import React from 'react'; 

import Section from '../molecules/WhiteBlock';
import { 
   mixClass,
   DividingHeader,
   Form
} from 'react-atomic-molecule';

const Tel = (props) =>
{
    const classes = mixClass(
        props.className,
        'grey inverted tel'
    );
    return (
        <DividingHeader
            {...props}
            className={classes}
            style={Styles.tel}
        >
            Tel
        </DividingHeader>
    );
}


const ContactForm = (props) =>
    <Form {...props} />

const Contact = (props) =>
{
    return (
        <Section 
            className="contact"
            style={Styles.container}
        >
            <div className="pure-g" style={Styles.inside}>
            <Tel className="pure-u-1 pure-u-md-1-3" />
            <ContactForm className="pure-u-1 pure-u-md-2-3" />
            </div>
        </Section>
    );
}

export default Contact;

const Styles = {
    container: {
        background: '#2b2b2b',
        maxWidth: '100%'
    },
    inside: {
        maxWidth: '930px',
        margin: '0 auto'
    },
    tel: {
        margin: '0 20px'
    }
};
