import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 50px;
  align-self: center;
  width: 95%;
  flex-flow: row wrap;
  padding-left: 15px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #fff;
  width: 45%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-horizontal: 5px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  padding-right: 10px;
  margin-vertical: 10px;
`;
export const CardText = styled.Text`
  margin-horizontal: 15px;
`;
