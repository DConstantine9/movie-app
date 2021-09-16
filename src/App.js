import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";
import "./styles/App.css"

const App = () => {

  const routes = [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
      path: "/about",
      exact: true,
      component: About
    },
    {
      path: "/movie/:id",
      exact: true,
      component: Detail
    }
  ]

  return(
    <HashRouter>
      <Navigation />
      <Switch>
        {routes.map(route => 
          <Route 
            component={route.component} 
            path={route.path} 
            exact={route.exact} 
            key={route.path} 
          />
        )}
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default App;