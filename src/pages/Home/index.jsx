import * as S from './style'

import { Container, MainContent } from '@utils/style'

import { LOGO } from '@constants/topBarButtonTypes'
import Nav from '@components/Nav'
import React from 'react'
import TopBar from '@components/TopBar'
import { withRouter } from 'react-router-dom'

const Home = props => {
console.log("🚀 ~ file: index.jsx ~ line 12 ~ props", props)
  
  return (
    <Container>
      <TopBar left={LOGO} />
      <MainContent>
        <Nav />
        <S.Container>
          <p>Home</p>
          <br/>
          <p>{process.env.REACT_APP_MESSAGE}</p>
          <br/>
          <p>{process.env.REACT_APP_SECRET}</p>
        </S.Container>
      </MainContent>
    </Container>
  )
}

export default withRouter(Home)
