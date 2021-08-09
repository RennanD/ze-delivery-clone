import React from 'react';

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
} from './styles';

export type Product = {
  id: string;
  description: string;
  image: string;
  price: number;
  priceFormated: string;
  discount: number;
  discountFormated: number;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  return (
    <Container style={shadowStyle}>
      <ProductImage source={{ uri: product.image }} />
      <Hr />
      <ProductInfo>
        <ProductDescription numberOfLines={2}>
          {product.description}
        </ProductDescription>

        <ProductPriceContainer>
          <ProdcutDiscount>{product.discountFormated}</ProdcutDiscount>
          <ProductPrice>{product.priceFormated}</ProductPrice>
        </ProductPriceContainer>
      </ProductInfo>
    </Container>
  );
}
