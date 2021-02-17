import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {width: '100%', alignItems: 'center', padding: 20},
});

export const Container = styled.View`
  align-items: center;
`;

export const Logo = styled.Text``;

export const InputHeader = styled.TextInput``;

export const Balance = styled.View`
  flex-direction: row;
`;

export const BalancePanel = styled.View`
  flex: 1;
`;

export const BalancePanelLabel = styled.Text``;

export const BalancePanelValue = styled.Text``;

export const BalanceButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const BalanceButtonLabel = styled.Text``;
