import styled from 'styled-components'

const Button = styled.button`
  height: 40px;
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  cursor: pointer;
`

export {Button}
