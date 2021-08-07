import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  padding: 15px;
  padding-top: ${(Platform.OS === 'ios' ? getStatusBarHeight() : 0) + 15}px;
  padding-bottom: 25px;
  z-index: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const UserAvatarContainer = styled.View`
  height: 42px;
  width: 42px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};

  position: relative;
`;

export const UserProfileButton = styled(RectButton)`
  height: 18px;
  width: 18px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  position: absolute;

  right: -3px;
  bottom: -1px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const UserAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 20px;
`;

export const UserAddressContainer = styled.View`
  margin: 0 15px;
  flex: 1;
`;

export const UserAddressMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
  margin-bottom: 4px;
`;

export const UserAddress = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MoreInformationsButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
