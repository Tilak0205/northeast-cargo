import React,{useState,useEffect} from 'react';
import './assets/App.css';

import SnakAlert from './common/SnakAlert';
import ConfirmationDialog from './common/ConfirmationDialog';
import AppInitializer from './AppInitializer';
import Template from './Template';

import WithClearCache from './WithClearCache';

import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

function App() {  

  return (
    <div className="app">
      <WithClearCache/>
      <Provider store={store}>
        <AppInitializer>
          <BrowserRouter>
            <Template/>
          </BrowserRouter>
        </AppInitializer>   
      </Provider> 
      <SnakAlert/>
      <ConfirmationDialog/>
    </div>
  );
}

export default App;
