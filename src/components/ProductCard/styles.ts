import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 200px;
  width: 135px;
  /* border: 1px solid ${({ theme }) => theme.colors.border}; */
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};

  margin-right: 10px;
  margin-bottom: 5px;
`;

export const ProductInfo = styled.View`
  padding: 7px;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
  align-self: center;
  margin-top: 7px;
`;

export const Hr = styled.View`
  height: 0.5px;
  margin-top: 7px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const ProductDescription = styled.Text`
  max-width: 95%;

  flex-wrap: wrap;

  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 5px;
`;

export const ProductPriceContainer = styled.View``;

export const ProdcutDiscount = styled.View``;

export const ProductPrice = styled.View``;

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
