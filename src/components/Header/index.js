import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Logo,
  InputHeader,
  InputHeaderText,
  IconButtonIn,
  IconButtonOut,
  Balance,
  BalancePanel,
  BalancePanelLabel,
  BalancePanelValue,
  BalancePanelValueText,
  BalancePanelValueButton,
  BalanceButton,
  BalanceButtonLabel,
  Styles,
} from './styles';

export default function Header() {
  return (
    <Container>
      <LinearGradient
        style={Styles.container}
        colors={['rgb(181, 21, 75)', 'rgb(166, 21, 50)', 'rgb(138, 19, 75)']}>
        <Logo>Bradesco</Logo>

        <InputHeader>
          <IconButtonIn onPress={() => {}}>
            <Icon name="user" size={15} color="white" style={Styles.userIcon} />
          </IconButtonIn>

          <InputHeaderText
            placeholder="Hi, My account"
            placeholderTextColor="white"
            style={Styles.input}
          />

          <IconButtonOut onPress={() => {}}>
            <Icon
              name="caret-right"
              size={15}
              color="white"
              style={Styles.outIcon}
            />
          </IconButtonOut>
        </InputHeader>

        <Balance>
          <BalancePanel>
            <BalancePanelLabel>My Available Balance</BalancePanelLabel>

            <BalancePanelValue>
              <BalancePanelValueText>$ 200.000,00</BalancePanelValueText>

              <BalancePanelValueButton>
                <Icon name="eye" size={15} color="white" />
              </BalancePanelValueButton>
            </BalancePanelValue>
          </BalancePanel>

          <BalanceButton>
            <BalanceButtonLabel>Extract</BalanceButtonLabel>
          </BalanceButton>
        </Balance>
      </LinearGradient>
    </Container>
  );
}
