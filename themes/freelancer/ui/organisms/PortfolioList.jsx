import React, {Component} from 'react'; 
import {ZoomIn} from 'ra-icon-magnifier';
import Immutable from 'immutable';
import { List, reactStyle } from 'react-atomic-molecule';

import { HoverDimmerCardView } from 'react-atomic-organism';

import {
    PopupModal,
    PopupClick
} from 'organism-react-popup';

import PortfolioContent from '../organisms/PortfolioContent';

let injects;

class PortfolioList extends Component
{
    constructor(props) 
    {
        super(props);
        if (!injects) {
            injects = {};
            InjectStyles.forEach((item, key)=>{
                injects[key] = reactStyle.apply(
                    null,
                    item
                );
            });
        }
    }

    render()
    {
        const {image, title, keys} = this.props;
        return (
            <List type="card" styles={injects.cards}>   
            {image.map((item, num)=>
                <PopupClick
                    key={num}
                    imageSrc={item}
                    header={title[num]}
                    style={Styles.card}
                    container={<HoverDimmerCardView />}
                    popup={()=>{
                        return <PortfolioContent 
                            name={keys[num]} 
                        />;
                    }}
                >
                    <ZoomIn style={Styles.zoom} />
                </PopupClick>
            )}
            </List>
        );
    }
}

export default PortfolioList;

const Styles = {
    card: {
        background: '#000'
    },
    zoom: {
        fill: '#fff',
        width: '50px',
        height: '50px'
    },
};

const InjectStyles = Immutable.Map({
    cardHeader: [
        {color: '#fff'},
        '.ui.cards>.card>.content>.header'
    ],
    cards: [{
        justifyContent: ['center']
    }]
});
