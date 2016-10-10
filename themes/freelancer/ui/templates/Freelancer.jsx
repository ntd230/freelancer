import React, {Component} from 'react'; 
import {OneColumn} from 'pmvc_react_landing'; 
import { reactStyle } from 'react-atomic-molecule';
import Header from '../organisms/Header'; 
import Footer from '../organisms/Footer'; 
import { scrollDispatch } from 'organism-react-scroll-nav';

export default class Freelancer extends Component
{
    constructor(props)
    {
        super(props);
        scrollDispatch({
            scrollMargin: 50
        });
    }

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
const lgMax = '@media (max-width: 64em)';
const xl = '@media (min-width: 80em)';
const Styles = {
    lgMaxHeader: reactStyle({
        padding: '1rem 1.75rem 1.875rem !important',
        background: '#000 !important',
        maxHeight: '60px',
        boxSizing: 'border-box',
        overflow: 'hidden'
    }, [lgMax, '.page-header']),
    lgMaxHeaderOn: reactStyle({
        maxHeight: '100%',
    }, [lgMax, '.page-header.on']),
    lgMaxHeaderNavLi: reactStyle({
        display: 'block !important' 
    }, [lgMax, '.page-header ul li']),
    lgMaxBrand: reactStyle({
        paddingTop: '0 !important' 
    }, [lgMax, '.brand']),
    lgMaxHamburger: reactStyle({
        display: 'block !important' 
    }, [lgMax, '.hamburger']),
};
