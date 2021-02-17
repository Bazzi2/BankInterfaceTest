import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '~/Style/colors';

import ChartSummaryList from './SummaryList/index';
import {Container, ChartPanel, ChartText} from './styles';

export default function Chart() {
  return (
    <Container>
      <ChartText>Status Chart</ChartText>
      <ChartPanel>
        <Icon name="chart-pie" size={120} color={Colors.yellow} />
        <ChartSummaryList />
      </ChartPanel>
    </Container>
  );
}
