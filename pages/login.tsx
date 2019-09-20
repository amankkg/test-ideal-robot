import * as React from 'react'
import styled from 'styled-components'

import {Button} from '../ui/atoms/button'
import {Input} from '../ui/atoms/input'

const Form = styled.form`
  height: 200px;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${props => props.theme.bgMain}
  maring: 5px;
`

const LoginPage = () => (
  <Form>
    <Input name="login" type="text" placeholder="login" />
    <Input name="password" type="password" placeholder="password" />
    <Button type="submit">Log in</Button>
  </Form>
)

export default LoginPage
