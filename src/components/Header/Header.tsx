import styled, { DefaultTheme } from 'styled-components';
import { theme } from '../Theme/theme';

export const Header: React.ElementType = styled.header<{theme: DefaultTheme}>`
height: 50px;
background-color: ${props => props.color? '#9400D3' : '#9370DB'};
color: ${props => props.color? '#ffcc33' : theme.light.text};
font-size: 35px;
padding: 10px;
`