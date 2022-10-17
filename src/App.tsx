import './App.css';

import React from 'react';
import { createClient, Provider } from 'urql';

import Characters from './pages/Characters';

const client = createClient({
  url: 'https://rickandmortyapi.com/graphql',
});

const App = () => (
  <Provider value={client}>
    <Characters />
  </Provider>
);

export default App;
