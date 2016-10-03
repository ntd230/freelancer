import React, {Component} from 'react'; 
import {ZoomIn} from 'ra-icon-magnifier';
import { 
    List,
    AutoInjectComponent,
    reactStyle 
} from 'react-atomic-molecule';

import { HoverDimmerCardView } from 'react-atomic-organism';

import { 
    dispatch,
    pageStore,
    Container
} from 'reshow';

import {
    popupDispatch
} from 'organism-react-popup';

import PortfolioContent from '../organisms/PortfolioContent';

let injects;

class PortfolioList extends AutoInjectComponent
{
   static getStores()
   {
       return [pageStore];
   }

   static calculateState(prevState, props)
   {
        const state = pageStore.getState();
        const portfolioId = state.get('portfolioId');
        if (portfolioId) {
            popupDispatch({
                type: 'dom/update',
                params: {
                    popup: <PortfolioContent
                        name={portfolioId}
                        closeCallBack={()=>{
                            dispatch({
                                type: 'config/set',
                                params: {
                                    portfolioId: '' 
                                },
                                url: '/index.php/index/'
                            });
                        }}
                    />
                }
            });
        } else {
            popupDispatch({type: 'dom/close'});
        }
        return prevState;
   }

    constructor(props) 
    {
        super(props);
        injects = this.autoInject(
            injects,
            InjectStyles
        );
    }

    render()
    {
        const {image, title, keys} = this.props;
        return (
            <List type="card" styles={injects.cards}>   
            {image.map((item, num)=>
                <HoverDimmerCardView
                    key={num}
                    imageSrc={item}
                    header={title[num]}
                    style={Styles.card}
                    onClick={(e)=>{
                        dispatch({
                            type: 'config/set',
                            params: {
                                portfolioId: keys[num]
                            },
                            url: '/index.php/index/'+keys[num]
                        });
                    }}
                >
                    <ZoomIn style={Styles.zoom} />
                </HoverDimmerCardView>
            )}
            </List>
        );
    }
}

const PortfolioListContainer = Container.create(
    PortfolioList,
    { withProps:true }
);

export default PortfolioListContainer;

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

const InjectStyles = { 
    cardHeader: [
        {color: '#fff'},
        '.ui.cards>.card>.content>.header'
    ],
    cards: [{
        justifyContent: ['center']
    }]
};
