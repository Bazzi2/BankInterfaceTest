import styled from 'styled-components/native';

import Colors from '../../Style/colors';

export const Container = styled.View`
  align-items: center;
`;

export const ChartText = styled.Text`
  color: ${Colors.metalDark};
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
`;

export const ChartPanel = styled.View`
  background-color: ${Colors.dark};
  width: 95%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-flow: row wrap;
  padding-top: 20px;
  padding-bottom: 20px;
`;
