import styled from 'styled-components';
import {
  MaxWidthSecondaryContainer,
  FlexColumn,
} from 'components/Globals/Globals';
import { Wrapper as PhotoWrapper } from 'components/Photo/styles';

export const ContentContainer = styled(MaxWidthSecondaryContainer)`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  padding-bottom: 60px;

  ${PhotoWrapper} {
    &:first-child {
      margin-top: 0;
    }

    margin-top: 20px;
  }
`;

export const TimelineWrapper = styled(FlexColumn)`
  margin-left: auto;
  margin-right: auto;
  max-width: 614px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.values.breakpoints.big}) {
    margin-left: 0;
    margin-right: 24px;
  }
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
