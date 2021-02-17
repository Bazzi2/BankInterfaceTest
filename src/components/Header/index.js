import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../Style/colors';

import {
  Container,
  Balance,
  BalanceLabel,
  BalanceValue,
  Info,
  InfoText,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Balance>
        <BalanceLabel onPress={() => {}}>
          <Icon name="money-bill-wave" size={30} color={Colors.turquese} />
        </BalanceLabel>

        <BalanceValue>$ 198.000,00</BalanceValue>
      </Balance>

      <Info>
        <InfoText>Extract</InfoText>
      </Info>
    </Container>
  );
}
