import SearchView from '../containers/SearchView';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Catalog from '../containers/Catalog';
import Contact from '../containers/Contact';
// eslint-disable-next-line import/no-unresolved
import AboutUs from '../containers/AboutUs';
import InsertCar from '../containers/InsertCar';
import AddUser from '../containers/AddUser';
import ShowDetails from '../containers/ShowDetails';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: isLogged ? SearchView : Login,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/register',
      component: Register,
    },
    {
      exact: true,
      path: '/catalog',
      component: Catalog,
    },
    {
      exact: true,
      path: '/contacto',
      component: Contact,
    },
    {
      exact: true,
      path: '/nosotros',
      component: AboutUs,
    },
    {
      exact: true,
      path: '/insert',
      component: InsertCar,
    },
    {
      exact: true,
      path: '/adduser',
      component: AddUser,
    },
    {
      exact: true,
      path: '/details/:id',
      component: ShowDetails,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
}

export default serverRoutes;
