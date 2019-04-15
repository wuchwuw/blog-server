import React from 'react'
import Icon from '../../components/icon/icon'
import styled from 'styled-components'

const LeftBar = () => {
  return (
    <LeftBarWrap>
      <Avatar>
      </Avatar>
      <DivTitle>x</DivTitle>
      <UlTag>
       <LiTag><Icon icon="icon-html" height="20" width="20"></Icon><SpanText>HTML&CSS</SpanText></LiTag>
       <LiTag><Icon icon="icon-js" height="20" width="20"></Icon><SpanText>Javasciprt</SpanText></LiTag> 
       <LiTag><Icon icon="icon-vue" height="20" width="20"></Icon><SpanText>Vue</SpanText></LiTag> 
       <LiTag><Icon icon="icon-react" height="20" width="20"></Icon><SpanText>React</SpanText></LiTag> 
      </UlTag>
      <About><Icon icon="icon-github" height="20" width="20"></Icon><Icon icon="icon-email" height="20" width="20"></Icon></About>
    </LeftBarWrap>
  )
}

const LeftBarWrap = styled.div`
  text-align: center;
  width: 200px;
  padding-top: 50px;
  height: 100%;
  box-shadow: 1px 0 3px 3px rgba(0, 0, 0, .01);
  background: #fff;
  position: relative;
  .leftbar-bg {
    position: absolute;
  }
`

const Avatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: black;
  display: inline-block;
`

const DivTitle = styled.div`
  margin-top: 15px;
  font-size: 20px;
`

const UlTag = styled.div`
  margin-top: 30px;
`

const LiTag = styled.li`
  margin-bottom: 15px;
  line-height: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 50px;
  color: #666666;
`

const SpanText = styled.span`
  margin-left: 5px;
`

const About = styled.div`
  svg {
    margin-right: 10px;
  }
`

export default LeftBar