import React  from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from  './admin'
import Login from './pages/login'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import NoMatch from './pages/nomatch'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'

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
                <Route path="/admin/ui/modals" component={Modals} />
                {/* <Route path="/admin/ui/loadings" component={Loadings} /> */}
                <Route path="/admin/ui/notification" component={Notice} />
                <Route path="/admin/ui/messages" component={Messages} />
                <Route path="/admin/ui/tabs" component={Tabs} />
                <Route path="/admin/ui/gallery" component={Gallery} />
                <Route path="/admin/ui/carousel" component={Carousel} />
                <Route path="/admin/form/login" component={FormLogin} />
                <Route path="/admin/form/reg" component={FormRegister} />
                <Route path="/admin/table/basic" component={BasicTable} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
        {/* </Switch> */}
      </App>
    </HashRouter>
  }
}