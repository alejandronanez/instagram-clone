import styled from 'styled-components';
import { FlexRow } from 'components/Globals/Globals';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pallete.white};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.pallete.gallery};
`;

export const Author = styled.div`
  padding: 10px;
`;

export const UserPhoto = styled.div``;

export const Actions = styled(FlexRow)`
  justify-content: space-between;
`;

export const IGIcon = styled.i`
  font-size: 23px;
`;

export const ActionIconWrapper = styled.div`
  padding-bottom: 10px;
  ${IGIcon} {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const UserActions = styled.div`
  background-color: ${({ theme }) => theme.pallete.white};
  padding: 20px;
`;

export const Likes = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export const Timestamp = styled.div``;
