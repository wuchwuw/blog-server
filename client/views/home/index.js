import React from 'react'
import styled from 'styled-components'
import LeftBar from './left-bar'
import Article from './Article'
import Moment from './moment'
import { Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Home = (props) => {
  console.log(props)
  const route = findRoute(props.routes, 'detail')
  return (
    <HomeWrap>
      <LeftBar></LeftBar>
      <Article></Article>
      <Moment></Moment>
      <TransitionGroup>
        <CSSTransition key={props.location.pathname} timeout={300} classNames="fade">
          <Route history={props.history} location={props.location} key={props.location.key} path={route.path} component={route.component}></Route>
        </CSSTransition>
      </TransitionGroup>
    </HomeWrap>
  )
}

function findRoute (routes, name) {
  return routes.find((item) => {
    return item.name === name
  })
}

const HomeWrap = styled.div`
  display: flex;
  height: 100%;
  background: rgba(0, 0, 0, .009);
`

export default Home