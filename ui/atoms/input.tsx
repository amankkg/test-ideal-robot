import styled from 'styled-components'

const Input = styled.input`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  width: 100%;
`

export {Input}
