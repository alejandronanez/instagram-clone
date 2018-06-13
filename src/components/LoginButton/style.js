import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.pallete.mineShaft};
  border: none;
  color: ${({ theme }) => theme.pallete.white};
  margin-top: 20px;
  padding: 10px 20px;
  width: 100%;
`;
