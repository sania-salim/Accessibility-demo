import styled from "styled-components";

export const StyledToggleButton = styled.button`
  color: ${({theme})=>theme.colors.primaryTextColor};
  background-color: ${({theme})=>theme.colors.primaryColor};
  border: none;
  border-radius: 20px;
  width: 40px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

export const ToggleIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: #ccc;
  border-radius: 50%;
  transition: transform 0.3s ease;
`
