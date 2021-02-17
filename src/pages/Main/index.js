import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~/Style/colors';

import Header from '~/components/Header/index';
import Cards from '~/components/Cards/index';
import Chart from '~/components/Chart/index';
import {Logo, Styles} from './styles';

export default function Main() {
  return (
    <LinearGradient
      colors={[Colors.black, Colors.blueDark]}
      style={Styles.container}>
      <Logo>BANK</Logo>
      <Icon name="chevron-down" size={30} color={Colors.metalDark} />

      <Header />
      <Cards />
      <Chart />
    </LinearGradient>
  );
}
