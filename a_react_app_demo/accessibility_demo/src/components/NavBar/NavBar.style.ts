import styled from "styled-components";

export const HeaderContainer = styled.header`
    width:100%;
    color:${({theme})=>theme.colors.tertiaryTextColor};
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px;
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
export const HeaderGrouped = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap:40px;
`