import * as React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

import {Product} from '../../core/domain'
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
  name?: string
  description?: string
  imageUri?: string
  onSubmit: (p: Omit<Product, 'id'>) => void
  className?: string
}

// TODO: track focus/touched in order to not show premature messages
const ProductForm = ({
  name: initialName,
  description: initialDescription,
  imageUri: initialImageUri,
  ...props
}: Props) => {
  const [name, setName] = React.useState(initialName || '')
  const [description, setDescription] = React.useState(initialDescription || '')
  // const [imageUri, setImageUri] = React.useState(initialImageUri || '')

  const router = useRouter()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit({name, description, imageUri: ''})
  }

  const nameError = name.length <= 1 ? 'name is too short' : false // + check for uniquiness

  return (
    <Form {...props} onSubmit={onSubmit}>
      <Field
        label="name"
        type="text"
        defaultValue={initialName}
        onChange={e => {
          setName(e.target.value)
        }}
        error={nameError}
        required
      />
      <Field
        label="description"
        type="text"
        defaultValue={initialDescription}
        onChange={e => {
          setDescription(e.target.value)
        }}
      />
      <Field
        label="image"
        type="file"
        warning="images are not supported yet"
        disabled
      />
      <CancelButton onClick={() => router.back()}>cancel</CancelButton>
      <SubmitButton type="submit" disabled={!!nameError}>
        submit
      </SubmitButton>
    </Form>
  )
}

export {ProductForm}
