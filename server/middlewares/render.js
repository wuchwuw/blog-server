import ReactDOMServer from 'react-dom/server'
import { createApp } from '../../client/entry-server'

export default async (ctx, next) => {
  console.log(ctx.url)
  try {
    let component = createApp({}, ctx.url)
    console.log(component)
    const reactHtml = ReactDOMServer.renderToString(
      component
    )
    await ctx.render('../views/index.html', {
      html: reactHtml
    })
  } catch (err) {
    console.log(err)
  } 
}