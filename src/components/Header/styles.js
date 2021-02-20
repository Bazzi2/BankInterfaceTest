import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {width: '100%', alignItems: 'center', padding: 20},
  input: {borderBottomWidth: 1, borderBottomColor: 'white'},
  userIcon: {paddingRight: 10},
  outIcon: {marginRight: 10},
});

export const Container = styled.View`
  align-items: center;
`;

export const Logo = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const InputHeader = styled.View`
  width: 100%;
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconButtonIn = styled.TouchableOpacity``;

export const InputHeaderText = styled.TextInput`
  color: #fff;
  flex: 1;
`;

export const IconButtonOut = styled.TouchableOpacity``;

export const Balance = styled.View`
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 50px;
`;

export const BalancePanel = styled.View`
  flex: 1;
`;

export const BalancePanelLabel = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const BalancePanelValue = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

export const BalancePanelValueText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
  padding-right: 8px;
`;

export const BalancePanelValueButton = styled.TouchableOpacity``;

export const BalanceButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const BalanceButtonLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
