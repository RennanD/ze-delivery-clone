import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFPercentage(20)}px;
  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const UserAvatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 30px;
`;

export const UserAddressContainer = styled.View``;

export const UserAddressMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`;

export const UserAddress = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 98%;
`;

export const MoreInformationsButton = styled.View``;
