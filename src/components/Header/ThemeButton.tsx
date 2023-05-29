import styled from 'styled-components';

export const ThemeButton: React.ElementType = styled.button`
    width: 130px;
    padding: 7px;
    background-color: ${props => props.color ? '#9370DB': '#3b3b3b'};
    border-radius: 20px;
    color: #ffcc33;
    cursor: pointer;
    margin: 0 auto;
    font-size: 15px;
    font-weight: bold;
`

