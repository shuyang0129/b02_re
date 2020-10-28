import * as S from './style'

import { Container, MainContent } from '@utils/style'

import { BACK } from '@constants'
import React from 'react'
import TopBar from '@components/TopBar'

const Register = props => {
  console.log('props', props)
  return (
    <Container>
      <TopBar left={BACK} />
      <MainContent>
        <S.Container>Register</S.Container>
      </MainContent>
    </Container>
  )
}

export default Register
