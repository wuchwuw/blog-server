import React from 'react'
import ReactDOM from 'react-dom'
import './common/fonts/iconfont.js'
import { BrowserRouter } from 'react-router-dom'
import Root from './app.js'

const createApp = (Component) => {
  const App = () => {
    return (
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
  };
  return <App />;
}

ReactDOM[module.hot ? 'render' : 'hydrate'](createApp(Root), document.getElementById("app"))

if (module.hot) {
  module.hot.accept("./app", () => {
    const NewApp = require("./app").default;
    ReactDOM.hydrate(createApp(NewApp), document.getElementById("app"));
  });
}