import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Blog from '../containers/Blog';
import Blogs from '../containers/Blogs';
import Home from '../containers/Home';
import NotFount from '../containers/NotFount';
import Profile from '../containers/Profile';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/profile' component={Profile} />
        <Route component={NotFount} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
