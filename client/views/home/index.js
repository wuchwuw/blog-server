import React from 'react'
import styled from 'styled-components'
import LeftBar from './left-bar'
import Article from './Article'
import Moment from './moment'

const Home = () => {
  return (
    <HomeWrap>
      <LeftBar></LeftBar>
      <Article></Article>
      <Moment></Moment>
    </HomeWrap>
  )
}

const HomeWrap = styled.div`
  display: flex;
  height: 100%;
  background: rgba(0, 0, 0, .009);
`

export default Home