import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import now from '../posts/app-menu/Now.md'; import categories from '../posts/app-menu/Categories.md';
import tags from '../posts/app-menu/Tags.md';
import archive from '../posts/archive/Archive.md';
import App from '../App';
import Home from '../Home';
import test1 from '../posts/test1/test1.md';
 
 //[IMPORT_PLACE_HOLDER]

export const RoutesList = {
  HOME: '/',
  NOW: '/now',
  CATEGORIES: '/categories',
  TAGS: '/tags',
  ARCHIVE: '/archive',
TEST1: '/test1', 
 //[ROUTE_PATH_PLACE_HOLDER]
}

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact
          path={RoutesList.HOME}
          render={() => <Home key="home" />} />

        <Route
          path={RoutesList.ARCHIVE}
          render={() => <App key="Archive" contentFilePath={archive}
            gitIssue={1} />} />

        <Route
          path={RoutesList.NOW}
          render={() => <App key="Now" contentFilePath={now}
            gitIssue={1} />} />

        <Route
          path={RoutesList.CATEGORIES}
          render={() => <App key="Categories" contentFilePath={categories}
            gitIssue={1} />} />

        <Route
          path={RoutesList.TAGS}
          render={() => <App key="Tags" contentFilePath={tags}
            gitIssue={1} />} />

<Route path={RoutesList.TEST1} render={() => <App key="test1" contentFilePath={test1} gitIssue={13} />} /> 
 {/*ROUTE_RENDER_PLACE_HOLDER*/}

      </Switch>
    </Router>
  );
}
