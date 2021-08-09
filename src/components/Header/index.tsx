import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';

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

type HeaderProps = {
  scrollInYAnimation: Animated.SharedValue<number>;
};

export function Header({ scrollInYAnimation }: HeaderProps): JSX.Element {
  const theme = useTheme();

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollInYAnimation.value,
          [0, 140],
          [0, -60],
          Extrapolate.CLAMP,
        ),
      },
    ],
    height: interpolate(
      scrollInYAnimation.value,
      [0, 140],
      [140, 80],
      Extrapolate.CLAMP,
    ),
    opacity: interpolate(
      scrollInYAnimation.value,
      [0, 100, 140],
      [1, 0, 1],
      Extrapolate.CLAMP,
    ),
    backgroundColor: interpolateColor(
      scrollInYAnimation.value,
      [0, 140],
      ['#1A1A1A', 'rgba(0, 0, 0, 0.01)'],
    ),
  }));

  return (
    <Container style={animatedHeaderStyle}>
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
