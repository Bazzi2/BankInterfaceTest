import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  searchIcon: {paddingRight: 40},
});

export const Container = styled.View`
  background-color: #fff;
  width: 86%;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: -25px;
  flex-direction: row;
  padding-left: 30px;
`;

export const InputSearchBar = styled.TextInput`
  flex: 1;
`;

export const SearchIcon = styled.TouchableOpacity``;

export const MicIcon = styled.TouchableOpacity``;
