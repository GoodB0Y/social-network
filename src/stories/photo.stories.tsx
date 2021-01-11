import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PhotoPage from '../components/Photo/Photo';

export default { title: 'Photo Page' };

export const Photo = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={PhotoPage} exact />
    </Switch>
  </BrowserRouter>
);
