import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  Logo,
  InputHeader,
  Balance,
  BalancePanel,
  BalancePanelLabel,
  BalancePanelValue,
  BalanceButton,
  BalanceButtonLabel,
  Styles,
} from './styles';

export default function Header() {
  return (
    <Container>
      <LinearGradient
        style={Styles.container}
        colors={['#ff4d4d', '#ff3838', '#D980FA']}>
        <Logo>Bradesco</Logo>
        <InputHeader placeholder="Hi, My account" />
        <Balance>
          <BalancePanel>
            <BalancePanelLabel>Current Balance</BalancePanelLabel>
            <BalancePanelValue>200.000,00</BalancePanelValue>
          </BalancePanel>
          <BalanceButton>
            <BalanceButtonLabel>Extract</BalanceButtonLabel>
          </BalanceButton>
        </Balance>
      </LinearGradient>
    </Container>
  );
}
