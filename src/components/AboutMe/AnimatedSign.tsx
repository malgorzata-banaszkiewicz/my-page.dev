import styled from "styled-components";
import { colorChange } from '../animations/sign';


export const AnimatedSign: React.ElementType = styled.h2`
    animation: ${colorChange} infinite 20s linear;
    pointer-events: none;
`