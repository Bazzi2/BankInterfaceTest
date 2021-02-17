import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

import Colors from '~/Style/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
});

export const Logo = styled.Text`
  color: ${Colors.metalDark};
  font-size: 32px;
  font-weight: bold;
`;
