import * as React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

import {Warehouse} from '../../core/domain'
import {Button} from '../atoms/button'
import {Field} from '../molecules/filed'

const Form = styled.form`
  display: block;
`

const CancelButton = styled(Button)`
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  border-radius: 10%;
  float: left;
`

const SubmitButton = styled(Button)`
  color: ${props => props.theme.bg};
  background: ${props => props.theme.fg};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  border-radius: 10%;
  float: right;
`

type Props = {
  label?: string
  address?: string
  onSubmit: (p: Omit<Warehouse, 'id'>) => void
  className?: string
}

// TODO: track focus/touched in order to not show premature messages
const WarehouseForm = ({
  label: initialLabel,
  address: initialAddress,
  ...props
}: Props) => {
  const [label, setLabel] = React.useState(initialLabel || '')
  const [address, setAddress] = React.useState(initialAddress || '')

  const router = useRouter()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit({label, address})
  }

  const labelError = label.length <= 1 ? 'name is too short' : false // + check for uniquiness

  return (
    <Form {...props} onSubmit={onSubmit}>
      <Field
        label="label"
        type="text"
        defaultValue={initialLabel}
        onChange={e => {
          setLabel(e.target.value)
        }}
        error={labelError}
        required
      />
      <Field
        label="address"
        type="text"
        defaultValue={initialAddress}
        onChange={e => {
          setAddress(e.target.value)
        }}
      />
      <CancelButton onClick={() => router.back()}>cancel</CancelButton>
      <SubmitButton type="submit" disabled={!!labelError}>
        submit
      </SubmitButton>
    </Form>
  )
}

export {WarehouseForm}
