import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const User = (user) => {
    const {login,avatar_url,html_url} = user;
    return (
    <div className="col-md-4 col-sm-6 col-ld-3 col-6">
        <div className="card mt-2">
            <img src={avatar_url} className="shadow img-fluid rounded" alt="profile-photo" 
            style={{boxShadow: '3px 4px 5px rgba(0, 0, 0, 0.075) inset, 4px 8px 12px rgb(138, 44, 226)'}}/>
            <div className="card-body">
                <h5 className="card-title"><strong> {login}</strong></h5>
                <Link to={`/user/${login}`} className='btn btn-outline-purple btn-sm'>Go Profile</Link>
            </div>
        </div>
    </div>
    )
}
export default User