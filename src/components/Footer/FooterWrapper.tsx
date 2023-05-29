import styled, { DefaultTheme } from 'styled-components';
import { theme } from '../Theme/theme';

export const FooterWrapper: React.ElementType = styled.footer<{theme: DefaultTheme} >`
  width: 100vw;
  color: ${props => props.color ? theme.dark.text : theme.light.text };
  background-color: ${props => props.color ? "#9400D3" : "#9370DB"};
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0px;
`
