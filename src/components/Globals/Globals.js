import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MaxWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.values.maxWidth};
  margin: 0 auto;
`;

export const MaxWidthSecondaryContainer = styled.div`
  max-width: ${({ theme }) => theme.values.maxSecondaryWidth};
  margin: 0 auto;
`;
