import React from 'react';
import { FlatList } from 'react-native';
import { ProductCard, Product } from '../ProductCard';

import { Container, TitleList } from './styles';

export type OptionsListProps = {
  title: string;
  products: Product[];
};

export function OptionsList({
  title,
  products,
}: OptionsListProps): JSX.Element {
  return (
    <Container>
      <TitleList>{title}</TitleList>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20 }}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </Container>
  );
}
