import styled from "styled-components";

export const Image: React.ElementType = styled.img.attrs(({src, alt}) => ({
src: src,
alt: alt,
}))`
    width: 230px;
    height: 180px;
    margin: 30px;
    border: 5px dotted #9400D3;
`