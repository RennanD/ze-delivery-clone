import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { HighlightsBanner } from '../../components/HighlightsBanner';

import bannerImages from '../../utils/banners';
import { OptionsMenu } from '../../components/OptionsMenu';
import { OptionsList, OptionsListProps } from '../../components/OptionsList';

import api from '../../services/api';
import { Product } from '../../components/ProductCard';

export function Home(): JSX.Element {
  const [beerList, setBeerList] = useState<OptionsListProps>(
    {} as OptionsListProps,
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/categories');

      response.data.forEach((category: any) => {
        if (category.key === 'beer') {
          setBeerList({
            title: category.name,
            products: category.products.map((product: Product) => ({
              ...product,
              priceFormated: Intl.NumberFormat(),
            })),
          });
        }
      });
    }

    loadData();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <HighlightsBanner images={bannerImages} />
        <OptionsMenu />
        <OptionsList title={beerList.title} products={beerList.products} />
        <OptionsList title={beerList.title} products={beerList.products} />
        <OptionsList title={beerList.title} products={beerList.products} />
      </Content>
    </Container>
  );
}
