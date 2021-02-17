import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

import Colors from '~/Style/colors';

export const Summary = styled.View`
  padding-left: 70px;
  padding-top: 10px;
`;

export const SummaryItems = styled.View`
  flex-flow: row wrap;
  margin-bottom: 10px;
`;

export const SummaryList = styled.FlatList``;

export const SummaryListText = styled.Text`
  color: ${Colors.metalDark};
`;

export const Styles = StyleSheet.create({
  icon: {
    paddingRight: 5,
  },
});
