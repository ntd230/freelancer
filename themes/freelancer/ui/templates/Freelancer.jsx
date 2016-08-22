import React, {Component} from 'react'; 
import {OneColumn} from 'pmvc_react_landing'; 
import Header from '../organisms/Header'; 
import Footer from '../organisms/Footer'; 

export default class Freelancer extends Component
{
    render(){
        const {column, ...rest} = this.props;
        switch(column)
        {
            case 'one':
            default:
                return <OneColumn
                    {...rest}
                    footer={<Footer />}
                    header={<Header />}
                />;
        }
    }
}

const sm = '@media (min-width: 35.5em)';
const md = '@media (min-width: 48em)';
const lg = '@media (min-width: 64em)';
const xl = '@media (min-width: 80em)';
const Styles = {
};
