/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './components/RepositoryList';

import store from './store';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => <Provider store={store}><RepositoryList /></Provider>;

export default App;
