import React from 'react'
import { Redirect } from 'react-router'
import { Home,Calculater,Output } from './Components';

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/level11/:value',
    'component': Output
  },
];

export default routes;
