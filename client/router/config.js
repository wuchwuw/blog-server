import Home from '../views/home/index'
import Detail from '../views/home/detail'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    routes: [
      {
        path: '/:id',
        component: Detail,
        name: 'detail'
      }
    ]
  }
]

export default routes