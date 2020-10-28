import * as S from './style'
import * as route from '@constants/routes'

import React from 'react'
import backButtonImg from '@assets/img/topBar/button__topBar_back.png'
import logoImg from '@assets/img/topBar/logo.png'
import settingButtonImg from '@assets/img/topBar/button__topBar_setting.png'
import { useHistory } from 'react-router-dom'

// Logo
export const Logo = () => {
  return <S.Logo src={logoImg} />
}

// 返回按鈕
export const BackButton = () => {
  let history = useHistory()
  return (
    <S.TopBarButton
      imgSrc={backButtonImg}
      onClick={() => history.goBack()}
    />
  )
}

// 設定按鈕
export const SettingButton = () => {
  let history = useHistory()
  return (
    <S.TopBarButton
      imgSrc={settingButtonImg}
      onClick={() => history.push(route.ABOUT)}
    />
  )
}
