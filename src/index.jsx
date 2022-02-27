import React from 'react';
import ReactDom from 'react-dom';

import HelloWorld from 'components/HelloWorld';
import GridLayout from './components/GridLayout';


const App = () => {
    return (
        <div>
            <HelloWorld />
            <GridLayout />
        </div>
    )
}


ReactDom.render(<App />, document.getElementById('app'))
