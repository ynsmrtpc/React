import React from 'react'

const Repo = ({ repo }) => {
  return (
    <li className="list-group-item">
      <i className="far fa-dot-circle"></i>
      <label className="pl-3">{repo.name}</label>
      <a href={repo.html_url} className="btn btn-outline-purple float-right">
        Open Code
      </a>
    </li>
  )
}

export default Repo
