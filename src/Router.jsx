import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import HowRichAmI from 'components/HowRichAmI'

const Router = () => <BrowserRouter>
  <Route path='/' exact render={({ location }) => <Redirect to={{ pathname: '/embed', search: location.search }} />} />
  <Route path='/embed' component={HowRichAmI} />
</BrowserRouter>

export default Router
