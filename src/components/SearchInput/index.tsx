import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, SearchTextInput } from './styles';

export function SearchInput(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Feather name="search" size={20} color={theme.colors.placeholder} />
      <SearchTextInput
        placeholder="Pesquise sua bebida favorita"
        placeholderTextColor={theme.colors.placeholder}
      />
    </Container>
  );
}
