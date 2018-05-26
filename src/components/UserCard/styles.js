import styled from 'styled-components';
import { FlexRow, FlexColumn } from 'components/Globals/Globals';

export const Wrapper = styled(FlexRow)``;

export const UserInfoWrapper = styled(FlexColumn)`
  align-self: center;
  font-size: 14px;
  margin-left: 10px;
`;

export const UserName = styled.a`
  color: ${({ theme }) => theme.pallete.mineShaft};
  font-weight: 600;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;

export const UserSubtitle = styled.span`
  color: ${({ theme }) => theme.pallete.dustyGray};
  display: block;
  font-size: 12px;
  margin-top: 2px;
`;
