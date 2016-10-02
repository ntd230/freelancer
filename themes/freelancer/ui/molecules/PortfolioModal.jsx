import React, {Component} from 'react'; 
import {
    PopupModal
} from 'organism-react-popup';

import {XIco, assign} from 'react-atomic-molecule';

class PortfolioModal extends Component
{
    componentWillReceiveProps(newProps)
    {
        this.setState({
            xIcoHoverStyle: null 
        });
    }

    xIcoEnter()
    {
        this.setState({
            xIcoHoverStyle: Styles.xIcoHover
        });
    }

    xIcoLeave()
    {
        this.setState({
            xIcoHoverStyle: null 
        });
    }

    render()
    {
        let xIcoHover = null;
        if (this.state) {
            xIcoHover = this.state.xIcoHoverStyle;
        }
        let xico = <XIco
            onMouseEnter={
                this.xIcoEnter.bind(this)
            } 
            onMouseLeave={
                this.xIcoLeave.bind(this)
            } 
            style={assign(
                {},
                Styles.x,
                xIcoHover
            )}
            size="75px"
            weight=".1rem"
        />;

        const {children, ...props} = this.props;
        return (
            <PopupModal
                {...props}
                style={Styles.container}
                fullScreenStyle={Styles.fullScreen}
                className="basic"
                closeEl={xico}
            >
                {children}
            </PopupModal>
        );
    }
}

export default PortfolioModal;

const Styles = {
    container: {
        background: '#fff'
    },
    fullScreen: {
        color: '#000',
        top: 0,
        width: '100%'
    },
    x: {
        width: '70px',
        height: '75px',
        borderRadius: '8px',
        backgroundColor: 'rgba(190,190,190,.39)',
        top: '20px',
        right: '20px'
    },
    xIcoHover: {
        opacity: '.3'
    }
};
