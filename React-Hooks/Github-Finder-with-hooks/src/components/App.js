import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import About from './About'
import Alert from './Alert'
import Search from './Search'
import axios from 'axios'
import UserDetails from './UserDetails'
import GithubState from '../context/githubState'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [repos, setRepos] = useState([])

  const getUserRepos = (username) => {
    setLoading(true)
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      setRepos(res.data)
      setLoading(false)
    })
  }

  const showAlert = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => {
      setAlert({ msg, type })
    }, 2500)
  }

  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <Search showAlert={showAlert} />
                <Users />
              </>
            )}
          />

          <Route path="/about" component={About} />
          <Route
            path="/user/:login"
            render={(props) => (
              <UserDetails
                {...props}
                getUserRepos={getUserRepos}
                repos={repos}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </GithubState>
  )
}

export default App
