import styled from 'styled-components';
import {
  MaxWidthSecondaryContainer,
  FlexColumn,
} from 'components/Globals/Globals';

export const ContentContainer = styled(MaxWidthSecondaryContainer)`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;

export const PhotoContainer = styled(FlexColumn)`
  max-width: 614px;
  margin-right: 28px;
  width: 100%;
`;

export const UpdatesContainer = styled(FlexColumn)`
  display: none;
  height: 100vh;
  max-width: 293px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.values.breakpoints.big}) {
    display: block;
  }
`;
