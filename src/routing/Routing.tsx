import { Route, Switch } from 'react-router-dom'
import { Landing } from 'pages'
import { ROUTES } from './Routing.const'

export const Routing = () => (
  <Switch>
    <Route path={ROUTES.MAIN} exact component={Landing} />
  </Switch>
)
