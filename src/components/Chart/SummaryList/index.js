import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '~/Style/colors';
import {
  Summary,
  SummaryList,
  SummaryItems,
  SummaryListText,
  Styles,
} from './styles';

export default function ChartSummaryList() {
  const summaryList = [
    {key: '1', description: 'Food', amount: 201.0},
    {key: '2', description: 'Fuel', amount: 12.0},
    {key: '5', description: 'Others', amount: 1200.0},
  ];
  return (
    <Summary>
      <SummaryList
        data={summaryList}
        renderItem={({item}) => (
          <SummaryItems>
            <Icon
              name="bullseye"
              size={15}
              color={Colors.yellow}
              style={Styles.icon}
            />
            <SummaryListText>
              {item.description}: $ {item.amount}
            </SummaryListText>
          </SummaryItems>
        )}
      />
    </Summary>
  );
}
