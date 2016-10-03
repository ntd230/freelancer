import React from 'react'; 
import Home from './Home';
import {ClientRoute} from 'reshow'; 

const Index = (props) => {
    let themes = {
        home: <Home />,
    };
    return (
        <ClientRoute
            themes={themes}
            {...props}
            parseUrl={(url)=>{
                if ('undefined' !== typeof document) {
                    url = document.URL;
                    const params = url.split('/');
                    const last = params.length-1;
                    if (params[last]) {
                        return {
                            portfolioId: params[last]
                        };
                    }
                }
                return {portfolioId:''};
            }}

        />
    );  
};

export default Index;
