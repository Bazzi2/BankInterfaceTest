import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Colors from '~/Style/colors';
import Routes from '~/routes';

const App = () => (
  <>
    <Routes />
    <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
  </>
);

export default App;
