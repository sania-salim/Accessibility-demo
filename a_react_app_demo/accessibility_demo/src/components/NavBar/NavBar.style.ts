import styled from "styled-components";

export const HeaderContainer = styled.header`
    color:${({theme})=>theme.colors.tertiaryTextColor};
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 40px;
    background-color: black;

`
export const NavLinksContainer = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap: 20px;

    > a {
        color:${({theme})=>theme.colors.tertiaryTextColor};
    }
`

export const Logo = styled.a`
    font-size: 40px;
    font-weight:600;
    text-decoration:none;
    color: #f5f5f5;
`

export const HeaderGrouped = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap:40px;
`