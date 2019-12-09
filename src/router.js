import React  from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from  './admin'
import Login from './pages/login'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch'

export default class MRouter extends React.Component{
  render() {
    return <HashRouter>
      <App>
        {/* <Switch> */}
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
        {/* </Switch> */}
      </App>
    </HashRouter>
  }
}