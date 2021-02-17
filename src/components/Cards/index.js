import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '~/Style/colors';
import {Container, Card, CardText} from './styles';

export default function Cards() {
  return (
    <Container>
      <Card onPress={() => {}}>
        <Icon name="credit-card" size={20} color={Colors.greenDark} />

        <CardText>Credit Card</CardText>
      </Card>
      <Card onPress={() => {}}>
        <Icon name="arrow-alt-circle-up" size={20} color={Colors.greenDark} />

        <CardText>Transfer</CardText>
      </Card>
      <Card onPress={() => {}}>
        <Icon name="donate" size={20} color={Colors.greenDark} />

        <CardText>Deposit</CardText>
      </Card>
      <Card onPress={() => {}}>
        <Icon name="handshake" size={20} color={Colors.greenDark} />

        <CardText>Lending</CardText>
      </Card>
      <Card onPress={() => {}}>
        <Icon name="chart-line" size={20} color={Colors.greenDark} />

        <CardText>Finances</CardText>
      </Card>
    </Container>
  );
}
