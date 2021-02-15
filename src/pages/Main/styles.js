import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #eb2f06;
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Text`
  color: #c8d6e5;
  font-size: 32px;
  font-weight: bold;
`;

export const Head = styled.View`
  background-color: #c8d6e5;
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
  color: #696574;
  margin: 5px 20px 0;
`;

export const Info = styled.TouchableOpacity`
  border-radius: 5px;
  width: 70px;
  align-self: flex-end;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  color: #696574
  margin: 7px 5px 3px;
`;
