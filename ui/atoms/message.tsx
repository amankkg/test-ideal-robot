import styled from 'styled-components'

type OfType = {
  level?: 'default' | 'success' | 'warning' | 'error'
  success?: boolean
  warning?: boolean
  error?: boolean
}

const getColor = (props: OfType) =>
  props.level === 'success' || props.success
    ? 'green'
    : props.level === 'warning' || props.warning
    ? 'orange'
    : props.level === 'error' || props.error
    ? 'red'
    : 'default'

const Message = styled.p<OfType>`
  opacity: 0.66;
  color: ${getColor};
  border: 3px solid ${getColor};
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  cursor: ${props => (props.onClick == null ? 'default' : 'pointer')};
`

export {Message}
