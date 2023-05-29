import styled from "styled-components";
const Aircraft = 'src/assets/aircraft-5919521_1280.png';
const Fire = 'src/assets/apocalypse-2273069_1280.jpg';

export const ButtonContainer: React.ElementType = styled.div`
padding: 70px;
display: flex;
gap: 10px;
background-image: ${props => props.backgroundBadNews? `url(${Fire})` : `url(${Aircraft})`};

`