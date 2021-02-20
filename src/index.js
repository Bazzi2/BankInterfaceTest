import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="rgb(181, 21, 75)" />
    <Routes />
  </>

);

export default App;
