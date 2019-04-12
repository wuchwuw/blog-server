import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'

const App = ({route}) => {
  return (
    renderRoutes(route.routes)
  )
}

export default hot(App)