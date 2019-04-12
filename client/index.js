import React from 'react'
import ReactDOM from 'react-dom'
import './common/fonts/iconfont.js'
import { renderRoutes } from 'react-router-config'
import routes from './router/config'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById('app')
)

// if (module.hot) {
//   console.log(111)
//   module.hot.accept('./app', () => {
//     ReactDOM.hydrate(<BrowserRouter>
//       <App></App>
//     </BrowserRouter>, document.getElementById('app'))
//   })
// }