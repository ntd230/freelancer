import React from 'react'; 
import {Home} from 'pmvc_react_portfolio';
import {ClientRoute} from 'reshow'; 
import Me from '../organisms/Me';

const themes = {
    home: Home,
};
const Index = (props) => {
    return (
        <ClientRoute
            themes={themes}
            {...props}
            me={<Me />}
            parseUrl={(url)=>{
                const params = url.split('/');
                const last = params.length-1;
                if (params[last]) {
                    return {
                        portfolioId: params[last]
                    };
                }
                return {portfolioId:''};
            }}
            ajax={true}
        />
    );  
};

export default Index;
