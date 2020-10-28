import * as S from './style'

import { Container, MainContent } from '@utils/style'

import { BACK } from '@constants'
import React from 'react'
import TopBar from '@components/TopBar'

const About = props => {
  return (
    <Container>
      <TopBar left={BACK} />
      <MainContent>
        <S.Container>About</S.Container>
      </MainContent>
    </Container>
  )
}

export default About
