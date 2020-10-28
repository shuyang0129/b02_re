import * as S from './style'

import { Container, MainContent } from '@utils/style'

import { BACK } from '@constants'
import { HOME } from '@constants/routes'
import React from 'react'
import TopBar from '@components/TopBar'
import { useHistory } from 'react-router-dom'

const Login = props => {
  const history = useHistory()

  const login = () => {
    localStorage.setItem('token', 'login...')
    history.replace(HOME)
  }

  return (
    <Container>
      <TopBar left={BACK} />
      <MainContent>
        <S.Container>
          <p>Login</p>
          <br />
          <S.LoginButton onClick={login}>Go Login</S.LoginButton>
        </S.Container>
      </MainContent>
    </Container>
  )
}

export default Login
