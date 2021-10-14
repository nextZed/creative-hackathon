import { Route, Switch } from 'react-router-dom'
import { Circles } from 'pages'
import { Navigation } from 'core/components'
import { ROUTES } from './Routing.const'

export const Routing = () => (
  <Switch>
    <Navigation />
    <Route path={ROUTES.MAIN}>
      <Circles />
    </Route>
  </Switch>
)
