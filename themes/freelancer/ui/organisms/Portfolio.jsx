import React, {Component} from 'react'; 
import { CardView } from 'react-atomic-organism';
import Immutable from 'immutable';
import {
        List,
        Dimmer,
        reactStyle
} from 'react-atomic-molecule';
import {ZoomIn} from 'ra-icon-magnifier';

import Header from '../molecules/AnimateHeader';
import Content from '../molecules/AnimateContent';
import WhiteBlock from '../molecules/WhiteBlock';

let inject = false;

class Portfolio extends Component
{
    constructor(props) 
    {
        super(props);
        if (!inject) {
                InjectStyles.forEach((item, key)=>{
                        reactStyle.apply(null,item);
                });
        }
    }

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
                <List type="card">   
                {card.image.map((item, key)=>
                    <CardView
                        key={key}
                        imageSrc={item}
                        header={card.title[key]}
                        style={Styles.card}
                        dimmer={
                            <Dimmer show={true}>
                                <ZoomIn style={Styles.zoom} width="30px" height="30px"/>
                            </Dimmer>
                        }
                    />
                )}
                </List>
            </WhiteBlock>
        );
    }
}
export default Portfolio;

const Styles = {
    container: {
        maxWidth: '930px'
    },
    card: {
        background: '#000'
    },
    content: {
        marginBottom: '50px'
    },
    zoom: {
        fill: '#fff'
    }
};

const InjectStyles = Immutable.Map({
    cardHeader: [
        {color: '#fff'},
        '.ui.cards>.card>.content>.header'
    ]
});
