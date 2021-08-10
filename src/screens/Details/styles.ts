import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;

  padding: 10px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 15 : 15}px;
  justify-content: space-between;
  /* margin-bottom: 10px; */
`;

export const BackButton = styled.TouchableOpacity``;

export const ColdBadge = styled.View`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.cold};

  border-radius: 8px;
  flex-direction: row;

  align-items: center;
`;

export const ColdBadgeText = styled.Text`
  margin-left: 8px;
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ImageContainer = styled.View`
  align-items: center;

  height: 310px;
  width: 100%;

  margin-bottom: 20px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const ProductImage = styled.Image`
  height: 250px;
  width: 200px;
`;

export const ProductDetails = styled.View`
  padding: 0 20px;
  margin-bottom: 15px;
`;

export const ProductDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.Text`
  color: ${({ theme }) => theme.colors.bold};
  font-size: ${RFValue(18)}px;
`;

export const CheckoutContainer = styled.View`
  padding: 0 20px;
`;

export const ProductQuantityInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 46px;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.colors.line};

  margin-bottom: 15px;
`;

export const ProductQuantityInputText = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.bold};
`;

export const RemoveAmountProductButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
`;

export const AddAmountProductButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
`;

export const AddManyProductsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const AddManyProductsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 46px;
  width: 30%;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.colors.line};

  margin-bottom: 10px;
`;

export const AddManyProductsText = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.bold};
`;

export const AddToCartButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  height: 50px;
  width: 100%;
  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 15px;
`;

export const AddToCartButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.bold};
`;
