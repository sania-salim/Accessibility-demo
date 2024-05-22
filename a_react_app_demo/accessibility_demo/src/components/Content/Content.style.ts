import styled from "styled-components";

export const ContentWrapper = styled.article`
    padding: 20px 100px;
    margin:0;

    >header{
        font-size: 30px;
        font-weight:200;
    }

`

export const ImageHolder = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;

    >img{
        width: 100%;
        padding: 30px 0;
    }
`