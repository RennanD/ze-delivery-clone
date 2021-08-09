import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { HighlightsBanner } from '../../components/HighlightsBanner';

import bannerImages from '../../utils/banners';
import { OptionsMenu } from '../../components/OptionsMenu';
import { OptionsList, OptionsListProps } from '../../components/OptionsList';

import api from '../../services/api';
import { Product } from '../../components/ProductCard';

export interface ResponseObject {
  id: string;
  key: string;
  name: string;
  products: Product[];
}

export function Home(): JSX.Element {
  const [optionsList, setOptionsList] = useState<OptionsListProps[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get<ResponseObject[]>('/categories');

      const data = response.data.map(item => ({
        title: item.name,
        products: item.products.map(product => ({
          ...product,
          priceFormated: Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(product.price),
          discountFormated: Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format((product.discount / 100) * product.price),
        })),
      }));
      setOptionsList(data);
    }

    loadData();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <HighlightsBanner images={bannerImages} />
        <OptionsMenu />
        {optionsList.map(option => (
          <OptionsList title={option.title} products={option.products} />
        ))}
      </Content>
    </Container>
  );
}
