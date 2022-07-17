import React from 'react'
import loading from './loading.gif'

export const Loading = () => {
  return (
    <React.Fragment>
    <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
            <div className="form-group">
                <img src={loading} alt="loading..." 
                style={{
                    marginTop: "30vh",
                }}/>
            </div>
        </div>  
    </div>
    </React.Fragment>
    )
}
export  default Loading;