import styled from 'styled-components';

export const SubscribeSection = styled.section`
  width: 40%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: ${({theme})=>theme.colors.primaryColor};
  color:${({theme})=>theme.colors.tertiaryTextColor};
  padding: 20px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  flex: 1;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: white;
  color: black;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;