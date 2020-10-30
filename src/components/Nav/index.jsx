import * as S from './style'

import { ABOUT, LOGIN, MINE, REGISTER } from '@constants'

import React from 'react'

const Nav = () => {
  return (
    <S.Nav>
      <S.NavItem to={ABOUT}>About</S.NavItem>
      <S.NavItem to={MINE}>Mine</S.NavItem>
      <S.NavItem to={LOGIN}>Login</S.NavItem>
      <S.NavItem to={REGISTER}>Register</S.NavItem>
    </S.Nav>
  )
}

export default Nav
