import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Navbar'
import Users from './Users'
import About from './About'
import Alert from './Alert'
import Search from './Search'
import axios from 'axios'
import UserDetails from './UserDetails';

const App = () => {
    const [loading, setLoading, users, setUsers, user, setUser, repos, setRepos, alert, setAlert] = useState(false,[],[],{},[],null)
  
  const searchUsers = (keyword) => {
    setLoading(true)
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => { setUsers(res.data.items); setLoading(false) })        
  }

  const getUser = (username) => {
    setLoading(true)
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(res => { setUser(res.data); setLoading(false) })
        
  }

  const getUserRepos = (username) =>{
    setLoading(true)
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(res => { setRepos(res.data); setLoading(false) })
  }

  const clearUsers = () =>{
    setUsers([])
  }

  const setAlertMsg = (msg,type) => {
    setAlert(msg,type)

    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/" render={ () => (
              <>
              <Search 
                searchUsers={searchUsers} 
                clearUsers={clearUsers} 
                showClearBtn={users.length>0? true:false}
                setAlert={setAlertMsg}/>
              <Users users={users} loading={loading}/>
              </>
            )
          } />

          <Route path="/about" component={About}/>
          <Route path="/user/:login" 
          render={() => (
            <UserDetails 
              getUser= {getUser}
              getUserRepos= {getUserRepos}
              user={user} 
              repos={repos}
              loading={loading}
            />
          )}/>
        </Switch>
      </BrowserRouter>
    )
}

export default App