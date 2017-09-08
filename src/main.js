import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import bracketApp from './reducers/bracketApp';

import './main.css';

import Bracket from './components/bracket/bracket';

const container = document.getElementById('app');
// const store = createStore(bracketApp);

render(
        /** returns a reference to component's backing instance (in this case <Bracket/>) **/
        <Bracket/> ,container
);
