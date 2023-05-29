import styled from 'styled-components';

export const Menu: React.ElementType = styled.a`
  display: block;
  padding: 10px;
  cursor: pointer;
  font-weight: ${props => (props.isSelected ? '900' : 'normal')};
  background: ${props => (props.isSelected ? '#ffcc33' : props => (props.color ? '#9400D3' : '#9370DB'))};
  color: ${props => (props.isSelected ? '#3b3b3b' : props => (props.color ? '#ffcc33' : '#3b3b3b'))};
`
