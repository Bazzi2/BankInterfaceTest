import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Logo,
  Head,
  Balance,
  BalanceLabel,
  BalanceValue,
  Info,
  InfoText,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Logo>Bradesco</Logo>

      <Head>
        <Balance>
          <BalanceLabel onPress={() => {}}>
            <Icon name="coins" size={30} color="#696574" />
          </BalanceLabel>
          <BalanceValue>$ 198.000,32</BalanceValue>
        </Balance>

        <Info onPress={() => {}}>
          <InfoText>Extract</InfoText>
        </Info>
      </Head>
    </Container>
  );
}
