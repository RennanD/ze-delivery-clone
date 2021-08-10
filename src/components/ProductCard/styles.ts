import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ProductPriceProps = {
  hasDiscount?: boolean;
};

export const Container = styled.TouchableOpacity`
  height: 210px;
  width: 135px;
  /* border: 1px solid ${({ theme }) => theme.colors.border}; */
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};

  margin-right: 10px;
  margin-bottom: 5px;
`;

export const BadgeDiscountContainer = styled.View`
  position: absolute;
  border-radius: 10px;

  z-index: 5;

  top: 7px;
  left: 7px;

  padding: 3px 5px;
  background-color: ${({ theme }) => theme.colors.attention};
`;

export const BadgeDiscount = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ProductInfo = styled.View`
  padding: 7px;
  justify-content: space-between;
  flex: 1;
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

export const ProdcutDiscount = styled.Text`
  color: ${({ theme }) => theme.colors.bold};
  font-weight: bold;
`;

export const ProductPrice = styled.Text<ProductPriceProps>`
  color: ${({ theme }) => theme.colors.bold};
  font-weight: bold;

  ${({ hasDiscount, theme }) =>
    hasDiscount &&
    css`
      color: ${theme.colors.placeholder};
      font-weight: 400;
      text-decoration: line-through;
    `}
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
