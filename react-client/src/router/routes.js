import Home from '../pages/Home';
import Registration from '../pages/Registration';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/registration',
    component: Registration,
    exact: true,
  },
];
