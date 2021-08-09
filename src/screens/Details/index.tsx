import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  BackButton,
  CouldBadge,
  ImageContainer,
  ProductImage,
  ProductDetails,
  ProductDescription,
  ProductPrice,
  CheckoutContainer,
  ProductQuantityInput,
  RemoveAmountProductButton,
  AddAmountProductButton,
  AddManyProductsContainer,
  AddManyProductsButton,
  AddManyProductsText,
  AddToCartButton,
  AddToCartButtonText,
} from './styles';

import { Product } from '../../components/ProductCard';

import SnowflakeIcon from '../../assets/icons/snowflake.svg';

type RouteParams = {
  product: Product;
};

export function Details(): JSX.Element {
  const theme = useTheme();

  const route = useRoute();

  const { product } = route.params as RouteParams;

  return (
    <Container>
      <Header>
        <BackButton>
          <Feather name="arrow-left" color={theme.colors.text} size={32} />
          <CouldBadge>
            <SnowflakeIcon width={24} height={24} />
          </CouldBadge>
        </BackButton>
      </Header>
      <ImageContainer>
        <ProductImage source={product.image} />
      </ImageContainer>

      <ProductDetails>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{product.priceFormated}</ProductPrice>
      </ProductDetails>

      <CheckoutContainer>
        <ProductQuantityInput>
          <RemoveAmountProductButton>
            <Feather name="minus" color={theme.colors.text} size={24} />
          </RemoveAmountProductButton>

          <AddAmountProductButton>
            <Feather name="plus" color={theme.colors.primary} size={24} />
          </AddAmountProductButton>
        </ProductQuantityInput>

        <AddManyProductsContainer>
          <AddManyProductsButton>
            <AddManyProductsText>+ 6 un.</AddManyProductsText>
          </AddManyProductsButton>

          <AddManyProductsButton>
            <AddManyProductsText>+ 6 un.</AddManyProductsText>
          </AddManyProductsButton>

          <AddManyProductsButton>
            <AddManyProductsText>+ 6 un.</AddManyProductsText>
          </AddManyProductsButton>
        </AddManyProductsContainer>

        <AddToCartButton>
          <AddToCartButtonText>Adicionar (1)</AddToCartButtonText>
          <AddToCartButtonText>2,99</AddToCartButtonText>
        </AddToCartButton>
      </CheckoutContainer>
    </Container>
  );
}
