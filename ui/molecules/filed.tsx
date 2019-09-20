import * as React from 'react'
import styled from 'styled-components'

import {Label} from '../atoms/label'
import {Message} from '../atoms/message'

type MessageProp = string | boolean
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  success?: MessageProp
  warning?: MessageProp
  error?: MessageProp
}

function getKeyMessage(propCrop: {[key: string]: MessageProp}) {
  const [[key, value]] = Object.entries(propCrop)

  return typeof value === 'boolean'
    ? `${key.charAt(0).toUpperCase()}${key.slice(1)}!`
    : value
}

const Span = styled.span`
  display: block;
  padding: 5px;
`

const Field = ({label, success, warning, error, ...props}: Props) => (
  <Span>
    {label && <Label>{label}</Label>}
    <StyledInput {...props} />
    {success && <Message success>{getKeyMessage({success})}</Message>}
    {warning && <Message warning>{getKeyMessage({warning})}</Message>}
    {error && <Message error>{getKeyMessage({error})}</Message>}
  </Span>
)

const StyledInput = styled.input`
  height: 25px;
  display: block;
`

export {Field}
