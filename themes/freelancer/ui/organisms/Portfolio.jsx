import React, {Component} from 'react'; 

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import WhiteBlock from '../molecules/WhiteBlock';

import PortfolioList from '../organisms/PortfolioList';

class Portfolio extends Component
{

    render()
    {
        const {header, content, card} = this.props;
        return (
            <WhiteBlock style={Styles.container}>
                <Header>
                    {header}
                </Header>
                <Content style={Styles.content}>
                    {content}
                </Content>
                <PortfolioList {...card}/>
            </WhiteBlock>
        );
    }
}
export default Portfolio;

const Styles = {
    container: {
        maxWidth: '930px'
    },
    content: {
        marginBottom: '50px'
    },
};

