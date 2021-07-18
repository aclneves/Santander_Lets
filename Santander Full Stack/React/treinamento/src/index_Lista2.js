import React from 'react';
import ReactDOM from 'react-dom';
import {Lista2, Item} from './components/Lista2.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Lista2>
        <Item key={999} id={999} completo={false}>
          Teste 1 
        </Item>
        <Item key={998} id={998} completo={true}>
          Teste 2
        </Item>
    </Lista2>
 

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
