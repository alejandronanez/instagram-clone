import styled from 'styled-components';
import { MaxWidthContainer } from 'components/Globals/Globals';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.pallete.white};
  border-bottom: 1px solid ${({ theme }) => theme.pallete.gallery};
`;

export const Container = styled(MaxWidthContainer)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 21px 40px;
`;

export const IGIcon = styled.i`
  font-size: 35px;
`;

export const CTAIcon = styled.i`
  display: inline-block;
  font-size: 24px;
`;

export const SearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.pallete.gallery};
  background-color: ${({ theme }) => theme.pallete.alabaster};
  display: none;
  min-width: 200px;
  transition: min-width 250ms ease, background-color 250ms ease;
  padding: 8px 16px;

  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.pallete.white};
    min-width: 300px;
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.values.breakpoints.small}) {
    display: block;
  }
`;

export const A = styled.a`
  display: inline-block;
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
