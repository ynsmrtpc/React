import React, { Component } from 'react'
import User from './User';
import Loading from './Loading'

const Users = ( { loading,users } ) => {

    if(loading) {
      return <Loading />
  } else {
      return (
          <div className='container mt-3'>
            <div className="row">
            {users.map(user => (
              <User key={user.id} user={user} />
            ))}
            </div>
          </div>
        )
  }
}
export default Users