import React from 'react';
import { FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  Container,
  TitleList,
  MoreOptionsConatiner,
  MoreOptionsButton,
  shadowStyle,
} from './styles';

import { ProductCard, Product } from '../ProductCard';

export type OptionsListProps = {
  title: string;
  products: Product[];
};

export function OptionsList({
  title,
  products,
}: OptionsListProps): JSX.Element {
  const theme = useTheme();

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
        ListFooterComponent={() => (
          <MoreOptionsConatiner>
            <MoreOptionsButton style={shadowStyle}>
              <Feather
                name="arrow-right"
                size={32}
                color={theme.colors.primary}
              />
            </MoreOptionsButton>
          </MoreOptionsConatiner>
        )}
      />
    </Container>
  );
}
