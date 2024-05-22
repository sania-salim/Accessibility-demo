import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: ${({ theme }) => theme.colors.tertiaryTextColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: black;
  width: 100%;
  box-sizing: border-box;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${({ theme }) => theme.colors.tertiaryTextColor};
    text-decoration: none;
    margin: 5px 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Address = styled.address`
  font-style: normal;
  color: ${({ theme }) => theme.colors.tertiaryTextColor};
`;
