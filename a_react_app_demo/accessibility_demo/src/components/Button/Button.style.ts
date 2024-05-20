import styled from "styled-components";


export const StyledButton = styled.button`
    width:max-content;
    height: 50px;
    padding: 15px 10px;
    margin:20px;
    border-radius:5px;
    color:${({theme})=>theme.colors.tertiaryTextColor};
    background-color:${({theme})=>theme.colors.primaryColor};
`
