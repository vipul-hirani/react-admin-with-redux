import React from 'react';
import Loadable from 'react-loadable'
import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners';
const override = css`
    display: block;
    margin: 200 auto;
    border-color: red;
`;
function Loading() {
  return <div className='sweet-loading'>
      <RingLoader
          className={override}
          sizeUnit={"px"}
          size={70}
          color={'#00A7D4'}
          loading={true}
      />
  </div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const List = Loadable({
  loader: () => import('./views/List'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/list/:id', name: 'List', component: List },
];

export default routes;
