import React from 'react';
import ReactDom from 'react-dom';

import HelloWorld from 'components/HelloWorld';
import GridLayout from './components/GridLayout';
import TSHelloWord from './components/TSHelloWord';


const App = () => {
    return (
        <div>
            <HelloWorld />
            <GridLayout />
            <TSHelloWord name='DL' />
        </div>
    )
}


ReactDom.render(<App />, document.getElementById('app'))
