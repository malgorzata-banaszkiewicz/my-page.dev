import styled from 'styled-components';
import { Image } from '../Image/Image';
import { rotateTheStar } from '../animations/star';

export const RotatingStar: React.ElementType = styled(Image)`
    border: none;
    pointer-events: none;
    animation: ${rotateTheStar} infinite 20s linear;
    width: 100px;
    height: 100px;
`