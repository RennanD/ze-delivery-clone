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

export const MoreOptionsConatiner = styled.View`
  height: 210px;
  width: 80px;

  align-items: center;
  justify-content: center;
`;

export const MoreOptionsButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};

  height: 50px;
  width: 50px;
  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;

export const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};
