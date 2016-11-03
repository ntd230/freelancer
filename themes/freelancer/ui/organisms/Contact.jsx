import React from 'react'; 

import Section from '../molecules/WhiteBlock';
import { 
   mixClass,
   DividingHeader,
   Form,
   InputBox,
   Field
} from 'react-atomic-molecule';

import PhoneIcon from 'ricon/Phone';

const Header = (props) =>
    <DividingHeader
        {...props}
        className="grey inverte"
        style={Styles.header}
    />

const Tel = (props) =>
{
    const classes = mixClass(
        props.className,
        'tel'
    );
    const {header, content} = props;
    return (
        <div
            style={Styles.block}
            className={classes}
        >
            <Header>
                {header}
            </Header>
            <div>
                <i style={Styles.phoneIcon}>
                    <PhoneIcon />
                </i>
                {content}
            </div>
        </div>
    );
}


const ContactForm = (props) =>
{
    const classes = mixClass(
        props.className,
        'contact-form'
    );
    const {header, content} = props;
    return (
        <Form
            className={classes}
            style={Styles.block}
        >
            <Header>
                {header}
            </Header>
            <Field fieldClassName="two">
                <InputBox />     
                <InputBox />     
                <InputBox />     
            </Field>
            <Field fieldClassName="two">
                <Field atom="textarea"/>
            </Field>
        </Form>
    );
}

const Contact = (props) =>
{
    const {tel, form} = props;
    return (
        <Section 
            className="contact"
            style={Styles.container}
        >
            <div className="pure-g" style={Styles.inside}>
            <Tel className="pure-u-1 pure-u-md-1-3" {...tel} />
            <ContactForm className="pure-u-1 pure-u-md-2-3" {...form}/>
            </div>
        </Section>
    );
}

export default Contact;

const Styles = {
    container: {
        background: '#2b2b2b',
        maxWidth: '100%',
        color: '#fff'
    },
    inside: {
        maxWidth: '930px',
        margin: '0 auto'
    },
    block: {
        padding: '0 20px',
        fontSize: '1.063rem',
        fontFamily: 'Raleway,sans-serif',
        boxSizing: 'border-box',
    },
    phoneIcon: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'inline-block',
        background: '#0f87cd',
        padding: '10px',
        boxSizing: 'border-box',
        marginRight: 10
    },
    header: {
        textTransform: 'uppercase',
        fontSize: '1.063rem',
        whiteSpace: 'nowrap',
        marginBottom: 15
    }
};
