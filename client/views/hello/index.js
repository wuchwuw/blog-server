import React from 'react'
import Icon from '../../components/icon/icon'
import styled from 'styled-components'

const Hello = () => {
  return (
    <HelloWrap>
      <LeftBar>Hello saaassassadssssdsaasdasdsasdasddasdss</LeftBar>
      <div></div>
      <Icon icon="iconVue" height="16" width="16"></Icon>
    </HelloWrap>
  )
}

const HelloWrap = styled.div`
  display: flex;
`
const LeftBar = styled.div`
  width: 200px;
`

export default Hello