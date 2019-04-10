import React, { useState } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router/config'
import { hot } from 'react-hot-loader/root'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      {renderRoutes(routes)}
      <div>server side render {count}</div>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  )
}

export default hot(App)