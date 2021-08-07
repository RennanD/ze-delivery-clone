import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 20px;
  padding-bottom: 10px;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 49%;

  border: 1px solid ${({ theme }) => theme.colors.border};

  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;

  align-items: center;
`;

export const OptionButtonText = styled.Text`
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};

  margin-left: 10px;
`;
