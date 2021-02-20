import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, Card, CardText} from './styles';

export default function Cards() {
  return (
    <Container>
      <Card>
        <Icon name="exchange-alt" size={18} color="rgb(181, 21, 75)" />
        <CardText>Transfer</CardText>
      </Card>
      <Card>
        <Icon name="barcode" size={18} color="rgb(181, 21, 75)" />
        <CardText>Payments</CardText>
      </Card>
      <Card>
        <Icon name="credit-card" size={18} color="rgb(181, 21, 75)" />
        <CardText>Cards</CardText>
      </Card>
      <Card>
        <Icon name="coins" size={18} color="rgb(181, 21, 75)" />
        <CardText>Loans</CardText>
      </Card>
      <Card>
        <Icon name="handshake" size={18} color="rgb(181, 21, 75)" />
        <CardText>Investiments</CardText>
      </Card>
      <Card>
        <Icon name="piggy-bank" size={18} color="rgb(181, 21, 75)" />
        <CardText>Deposit</CardText>
      </Card>
    </Container>
  );
}
