import styled from 'styled-components';
import { FlexRow } from 'components/Globals/Globals';

export const Wrapper = styled.section`
  margin-top: 16px;
`;

export const TitleWrapper = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.pallete.dustyGray};
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;

export const TitleCTA = styled.a`
  color: ${({ theme }) => theme.pallete.mineShaft};
  font-size: 12px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export const FriendsStories = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.pallete.gallery};
  box-shadow: inset 0 -10px 10px -10px rgb(220, 220, 220);
  height: 306px;
  margin-top: 10px;
  overflow-y: scroll;

  > div {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 15px;
    }

    margin-top: 15px;
  }
`;
