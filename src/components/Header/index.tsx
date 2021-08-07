import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  Container,
  UserAvatar,
  UserAvatarContainer,
  UserProfileButton,
  UserAddressContainer,
  UserAddressMessage,
  UserAddress,
  MoreInformationsButton,
  Content,
} from './styles';
import { SearchInput } from '../SearchInput';

export function Header(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <UserAvatarContainer>
          <UserAvatar source={{ uri: 'https://github.com/rennand.png' }} />
          <UserProfileButton>
            <MaterialCommunityIcons
              name="menu"
              size={10}
              color={theme.colors.text}
            />
          </UserProfileButton>
        </UserAvatarContainer>

        <MoreInformationsButton>
          <UserAddressContainer>
            <UserAddressMessage>Receber agora em</UserAddressMessage>
            <UserAddress numberOfLines={1}>
              Rua beco da paz, 2096 Piçarreira, Teresina
            </UserAddress>
          </UserAddressContainer>
          <MaterialCommunityIcons
            name="chevron-down"
            color={theme.colors.shape}
            size={20}
          />
        </MoreInformationsButton>
      </Content>

      <SearchInput />
    </Container>
  );
}
