import styled from "styled-components";


export const MenuSection: React.ElementType = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
    background-color: ${props => props.color ? "#9400D3" : "#9370DB"};
`