import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ProductInfo,
  ProductImage,
  ProductDescription,
  ProductPriceContainer,
  ProdcutDiscount,
  ProductPrice,
  shadowStyle,
  Hr,
  BadgeDiscount,
  BadgeDiscountContainer,
} from './styles';

export type Product = {
  id: string;
  description: string;
  image: string;
  cold: boolean;
  price: number;
  priceFormated: string;
  discount: number;
  discountFormated: string;
};

type ProductCardProps = {
  product: Product;
};

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { navigate } = useNavigation<Nativation>();

  function handleShowProductDetail() {
    navigate('Details', { product });
  }

  return (
    <Container
      style={shadowStyle}
      activeOpacity={0.7}
      onPress={handleShowProductDetail}
    >
      {!!product.discount && (
        <BadgeDiscountContainer>
          <BadgeDiscount>-{product.discount}%</BadgeDiscount>
        </BadgeDiscountContainer>
      )}
      <ProductImage source={{ uri: product.image }} />
      <Hr />
      <ProductInfo>
        <ProductDescription numberOfLines={2}>
          {product.description}
        </ProductDescription>

        <ProductPriceContainer>
          {product.discount ? (
            <>
              <ProductPrice hasDiscount={!!product.discount}>
                {product.priceFormated}
              </ProductPrice>
              <ProdcutDiscount>{product.discountFormated}</ProdcutDiscount>
            </>
          ) : (
            <ProductPrice>{product.priceFormated}</ProductPrice>
          )}
        </ProductPriceContainer>
      </ProductInfo>
    </Container>
  );
}
