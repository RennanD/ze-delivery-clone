import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  padding: 15px 0;

  margin-bottom: 10px;
`;

export const TitleList = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.section_title};
  margin-bottom: 10px;
  margin-left: 15px;
`;
