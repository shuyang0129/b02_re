import styled from 'styled-components'

export const TopBarButton = styled.button`
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 25px;
  width: 25px;
`

export const Logo = styled.img`
  height: 25px;
  width: auto;
`
