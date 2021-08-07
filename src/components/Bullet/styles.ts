import styled from 'styled-components/native';

type ContainerProps = {
  active?: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-left: 8px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.placeholder};
`;
