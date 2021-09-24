import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Error from '../page/Error'
const Teams = lazy(() => import('../page/Teams'))
const Team = lazy(() => import('../page/Team'))
function MainRoute() {
  return (
    <div>
      <Suspense fallback={<h1>Please wait...</h1>}>
        <Switch>
          <Route exact={true} path="/" component={Teams} />
          <Route exact={true} path="/teams" component={Teams} />
          <Route exact={true} path="/teams/:url" component={Team} />
          <Route component={Error} />
        </Switch>
      </Suspense>
    </div>
  )
}
export default MainRoute
