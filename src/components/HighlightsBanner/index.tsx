import React, { useRef, useState } from 'react';

import { FlatList, ViewToken } from 'react-native';
import { Bullet } from '../Bullet';

import {
  Container,
  BannerImagesWrapper,
  BannerImage,
  IndexesContainer,
} from './styles';

type HighlightsBannerProps = {
  images: string[];
};

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export function HighlightsBanner({
  images,
}: HighlightsBannerProps): JSX.Element {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageIndexChange = useRef((info: ChangeImageProps) => {
    setActiveImageIndex(info.viewableItems[0].index!);
  });

  return (
    <Container>
      <FlatList
        data={images}
        keyExtractor={(_, index) => String(index)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BannerImagesWrapper activeOpacity={0.9}>
            <BannerImage source={{ uri: item }} resizeMode="contain" />
          </BannerImagesWrapper>
        )}
        onViewableItemsChanged={imageIndexChange.current}
      />

      <IndexesContainer>
        {images.map((_, index) => (
          <Bullet key={String(index)} active={index === activeImageIndex} />
        ))}
      </IndexesContainer>
    </Container>
  );
}
