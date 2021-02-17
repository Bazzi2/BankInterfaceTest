import styled from 'styled-components/native';

import Colors from '../../Style/colors';

export const Container = styled.View`
  width: 95%;
  align-items: center;
  border-radius: 10px;
  flex-flow: row wrap;
  padding-left: 15px;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${Colors.dark};
  width: 155px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 7px 10px 7px;
`;

export const CardText = styled.Text`
  color: ${Colors.metalDark};
  font-size: 18px;
  padding-top: 8px;
`;
