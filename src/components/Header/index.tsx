import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  Container,
  UserAvatar,
  UserAddressContainer,
  UserAddressMessage,
  UserAddress,
  MoreInformationsButton,
} from './styles';

export function Header(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <UserAvatar source={{ uri: 'https://github.com/rennand.png' }} />
      <UserAddressContainer>
        <UserAddressMessage>Receber agora em</UserAddressMessage>
        <UserAddress numberOfLines={1}>
          Rua de teste, 2096 Bairro, Cidade
        </UserAddress>
      </UserAddressContainer>
      <MoreInformationsButton>
        <Feather name="chevron-down" color={theme.colors.shape} size={20} />
      </MoreInformationsButton>
    </Container>
  );
}
