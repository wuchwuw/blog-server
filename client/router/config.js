import Home from '../views/home/index'
import App from '../app'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      }
    ]
  }
]

export default routes