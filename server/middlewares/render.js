import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { renderRoutes, matchRoutes } from 'react-router-config'
import config from '../../client/router/config'
import { StaticRouter } from 'react-router-dom'

export default async (ctx, next) => {
  try {
    const branch = matchRoutes(config, ctx.url)
    console.log(ctx.url)
    console.log(branch)
    console.log(branch.length)
    if (branch.length === 1) {
      await next()
    } else {
      // const { redirectLocation, renderProps } = match({ config, location: ctx.url })
      const reactHtml = ReactDOMServer.renderToString(
        <StaticRouter location={ctx.url} context={{}}>
          {renderRoutes(config)}
        </StaticRouter>
      )
      await ctx.render('../views/index.html', {
        html: reactHtml
      })
    }
  } catch (err) {
    console.log(err)
  } 
}