import React from 'react'
import Icon from '../../components/icon/icon'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeWrap>
      <LeftBar>Home saaassassadssssdsasasdasddasdss</LeftBar>
      <div></div>
      <Icon icon="iconVue" height="16" width="16"></Icon>
    </HomeWrap>
  )
}

const HomeWrap = styled.div`
  display: flex;
`
const LeftBar = styled.div`
  width: 200px;
  background: green;
`

export default Home