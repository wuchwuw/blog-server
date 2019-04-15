import React from 'react'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from "react-router-dom"
import routes from './router/config'
import Root from './app.js'

const createApp = (context, url, store) => {
  const App = () => {
    return (
      <StaticRouter context={context} location={url}>
        <Root />
      </StaticRouter>
    )
  }
  return <App />;
}

export {
  createApp
}