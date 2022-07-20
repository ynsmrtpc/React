import React, { Component } from 'react'
import Loading from './Loading'
import Repos from './Repos';

export class UserDetails extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
  render() {
    const {loading,repos} = this.props
    const {name,avatar_url,location,html_url,bio,blog,followers,following,public_repos} = this.props.user
    if(loading) return <Loading />
    return (
      <div className='container my-3'>
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <img src={avatar_url} alt="profile-photo" className='card-img-top' />
                    <div className="card-body">
                        <p className="card-text">{ name }</p>
                        <p><i className='fas fa-map-marker-alt'></i>
                        {location}</p>
                        <p>
                            <a href={html_url} target="_blank" className='btn btn-outline-purple btn-sm'>Go Github</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-body">
                    <div className="mb-3" style={{fontSize:'20px'}}>
                            <span className="badge badge-primary  p-2">Followers: {followers}</span>
                            <span className="badge badge-danger ml-2
                            p-2">Following: {following}</span>
                            <span className="badge badge-success ml-2
                            p-2">Repos: {public_repos}</span>
                        </div>
                        {
                            bio &&
                            <>
                                <h3>About</h3>
                                <p>{bio}</p>
                            </>
                        }
                        {
                            blog &&
                            <>
                                <h3>Website</h3>
                                <a href={`https://${blog}`} target="_blank" className='btn btn-outline-purple btn-sm'>Go Website</a>
                            </>
                        }
                    </div>
                    <ul className="list-group list-group-flush">
                        <Repos repos={repos} />
                </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default UserDetails