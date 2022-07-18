import React from 'react'

const Repo = ({repo}) => {
  return (
    <li className="list-group-item">
        <i className='far fa-dot-circle'></i> 
        {repo.name}
        <a 
            href={repo.html_url} 
            className="btn btn-outline-purple float-right">
            Open Code
        </a>
    </li>
  )
}

export default Repo