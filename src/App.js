import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home.js'
import Blog from './pages/Blog.js'
import Recipes from './pages/Recipes.js'
import Music from './pages/Music.js'

export default class extends Component {

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/music" component={Music} />
          </Switch>
        </Router>
      </div>
    )
  }
}