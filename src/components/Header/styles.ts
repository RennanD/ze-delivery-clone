import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  padding: 15px;
  padding-top: ${(Platform.OS === 'ios' ? getStatusBarHeight() : 0) + 10}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const UserAvatarContainer = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};

  position: relative;
`;

export const UserProfileButton = styled(RectButton)`
  height: 20px;
  width: 20px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  position: absolute;

  right: -5px;
  bottom: 0px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const UserAvatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 30px;
`;

export const UserAddressContainer = styled.View`
  flex: 1;
  margin: 0 15px;
`;

export const UserAddressMessage = styled.Text`
  font-size: ${RFValue(13)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`;

export const UserAddress = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  max-width: 95%;
`;

export const MoreInformationsButton = styled(BorderlessButton)``;
