import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, InputSearchBar, Styles, SearchIcon} from './styles';

export default function SearchBar() {
  return (
    <Container>
      <InputSearchBar
        placeholder="Doo a search"
        placeholderTextColor={'rgb(166, 21, 50)'}
      />
      <SearchIcon>
        <Icon
          name="search"
          size={25}
          color="rgb(166, 21, 50)"
          style={Styles.searchIcon}
        />
      </SearchIcon>
    </Container>
  );
}
