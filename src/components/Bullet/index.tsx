import React from 'react';

import { Container } from './styles';

type BulletProps = {
  active?: boolean;
};

export function Bullet({ active = false }: BulletProps): JSX.Element {
  return <Container active={active} />;
}
