import { Feather } from '@expo/vector-icons';
import React, { useState, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { useNavigation, useRoute } from '@react-navigation/native';
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
  ProductQuantityInputText,
  RemoveAmountProductButton,
  AddAmountProductButton,
  AddManyProductsContainer,
  AddManyProductsButton,
  AddManyProductsText,
  AddToCartButton,
  AddToCartButtonText,
  CouldBadgeText,
} from './styles';

import { Product } from '../../components/ProductCard';

import SnowflakeIcon from '../../assets/icons/snowflake.svg';

type RouteParams = {
  product: Product;
};

export function Details(): JSX.Element {
  const route = useRoute();
  const { product } = route.params as RouteParams;
  const { goBack } = useNavigation();

  const [quantity, setQuantity] = useState(1);
  const [price] = useState(() => {
    if (product.discount > 0) {
      return product.price - (product.discount / 100) * product.price;
    }
    return product.price;
  });

  const theme = useTheme();

  const [quantityLeft, quantityRight] = useMemo(
    () => String(quantity).padStart(2, '0').split(''),
    [quantity],
  );

  const totalPrice = useMemo(() => {
    const totalPriceAmount = quantity * price;

    return Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(totalPriceAmount);
  }, [quantity, price]);

  function handleAddProductAmount(amount: number) {
    if (amount < 0 && quantity === 1) return;

    setQuantity(oldState => oldState + amount);
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Feather
            name="arrow-left"
            color={theme.colors.placeholder}
            size={28}
          />
        </BackButton>
        <CouldBadge>
          <SnowflakeIcon width={24} height={24} />
          <CouldBadgeText>GELADA</CouldBadgeText>
        </CouldBadge>
      </Header>
      <ImageContainer>
        <ProductImage resizeMode="cover" source={{ uri: product.image }} />
      </ImageContainer>

      <ProductDetails>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          {product.discount ? product.discountFormated : product.priceFormated}
        </ProductPrice>
      </ProductDetails>

      <CheckoutContainer>
        <ProductQuantityInput>
          <RemoveAmountProductButton onPress={() => handleAddProductAmount(-1)}>
            <Feather name="minus" color={theme.colors.placeholder} size={24} />
          </RemoveAmountProductButton>

          <ProductQuantityInputText>
            {quantityLeft}
            {quantityRight}
          </ProductQuantityInputText>

          <AddAmountProductButton onPress={() => handleAddProductAmount(1)}>
            <Feather name="plus" color={theme.colors.primary} size={24} />
          </AddAmountProductButton>
        </ProductQuantityInput>

        <AddManyProductsContainer>
          <AddManyProductsButton onPress={() => handleAddProductAmount(6)}>
            <AddManyProductsText>+ 6 un.</AddManyProductsText>
          </AddManyProductsButton>

          <AddManyProductsButton onPress={() => handleAddProductAmount(12)}>
            <AddManyProductsText>+ 12 un.</AddManyProductsText>
          </AddManyProductsButton>

          <AddManyProductsButton onPress={() => handleAddProductAmount(15)}>
            <AddManyProductsText>+ 15 un.</AddManyProductsText>
          </AddManyProductsButton>
        </AddManyProductsContainer>

        <AddToCartButton>
          <AddToCartButtonText>Adicionar ({quantity})</AddToCartButtonText>
          <AddToCartButtonText>{totalPrice}</AddToCartButtonText>
        </AddToCartButton>
      </CheckoutContainer>
    </Container>
  );
}
