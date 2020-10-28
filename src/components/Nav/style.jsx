import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.div`
  align-items: center;
  background-color: lightsalmon;
  display: flex;
  flex: 0 0 40px;
  padding: 0 14px;
`

export const NavItem = styled(Link)`
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 10px;

  &:nth-child(n + 2) {
    margin-left: 14px;
  }
`
