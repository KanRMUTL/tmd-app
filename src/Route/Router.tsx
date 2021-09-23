import { Switch, Route } from 'react-router-dom';

import {
  INDEX,
  MOVIE_DETAIL,
  WATCHED_LIST,
  FAVORITE_LIST,
  RESULT_LIST
} from '../constants/routePaths';

const Router = () => (
  <Switch>
    <Route exact path={INDEX}>
      index
    </Route>
    <Route exact path={MOVIE_DETAIL}>
      movie detail
    </Route>
    <Route exact path={RESULT_LIST}>
      movie search
    </Route>
    <Route exact path={WATCHED_LIST}>
      watched
    </Route>
    <Route exact path={FAVORITE_LIST}>
      favorite
    </Route>
  </Switch>
);

export default Router;
