import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.shape};

  border: 1px solid ${({ theme }) => theme.colors.line};

  padding: 0 20px;
`;

export const SearchTextInput = styled.TextInput`
  flex: 1;
  padding: 0 20px;
`;
