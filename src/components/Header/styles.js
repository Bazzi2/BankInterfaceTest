import styled from 'styled-components/native';

import Colors from '../../Style/colors';

export const Container = styled.View`
  background-color: ${Colors.dark};
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  width: 95%;
  flex-direction: row;
`;

export const Balance = styled.View`
  flex: 1;
`;

export const BalanceLabel = styled.TouchableOpacity`
  margin: 10px 20px 5px;
`;

export const BalanceValue = styled.Text`
  font-size: 18px;
  color: ${Colors.turquese};
  margin: 5px 20px 0;
`;

export const Info = styled.TouchableOpacity`
  width: 70px;
  align-self: flex-end;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  color: ${Colors.metalDark};
  margin: 7px 5px 3px;
`;
