import React from 'react'
import {
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import GlobalStyle from './common/style/global-style.js'
import router from './router/config'

const App = () => {
  return (
    <div className="container">
      <GlobalStyle></GlobalStyle>
      <Switch>
        {
          router.map((route, i) => (
            <Route key={i} path={route.path} exact={route.exact} render={props => (
              <route.component {...props} routes={route.routes}/>
            )}/>
          ))
        }
        {/* <StatusRoute code={404}>
          <div>
            <h1>Not Found</h1>
          </div>
        </StatusRoute> */}
        {/*<Route path="/bar" component={Bar} />
        <Route path="/baz" component={Baz} />
        <Route path="/foo" component={Foo} />
        <Route path="/top-list" component={TopList} />
        <Redirect from="/" to="/bar" exact />
        */}
      </Switch>
    </div>
  )
}

export default App