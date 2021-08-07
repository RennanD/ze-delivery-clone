import React from 'react';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { HighlightsBanner } from '../../components/HighlightsBanner';

import bannerImages from '../../utils/banners';
import { OptionsMenu } from '../../components/OptionsMenu';

export function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Content>
        <HighlightsBanner images={bannerImages} />
        <OptionsMenu />
      </Content>
    </Container>
  );
}
