import * as S from './style'

import { Container, MainContent } from '@utils/style'

import { BACK } from '@constants'
import { REGISTER } from '@constants/routes'
import React from 'react'
import TopBar from '@components/TopBar'
import { useHistory } from 'react-router-dom'

const Mine = props => {
  const history = useHistory()
  console.log('props', props)

  const logout = () => {
    localStorage.removeItem('token')
    history.replace(REGISTER)
  }

  return (
    <Container>
      <TopBar left={BACK} />
      <MainContent>
        <S.Container>
          <p>Mine</p>
          <br />
          <S.LogoutButton onClick={logout}>Go Logout</S.LogoutButton>
        </S.Container>
      </MainContent>
    </Container>
  )
}

export default Mine
