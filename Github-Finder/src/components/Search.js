import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ''
        }
    }

    onChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        if(this.state.keyword === ''){
            this.props.setAlert('Please enter a value!','danger')
        } else {
            this.props.searchUsers(this.state.keyword)
            this.setState({
                keyword: ''
            })
        }
    }

  render() {
    return (
        <div className="containeer my-0 mt-3">
        <form className="input-group" onSubmit={this.onSubmit}>
            <div className="container my-3">
                <div className="input-group col-md-4 d-flex mx-auto">
                    <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control'/>
                    <div className="input-group-append">
                        <button type='submit' className='btn-purple btn'>Search</button>
                    </div>
                </div>
            </div>
        </form>
        {
            this.props.showClearBtn &&
            <button onClick={this.props.clearUsers} className="btn btn-outline-secondary btn-sm d-flex m-auto my-0">Clear Results</button>
        }
        
    </div>
    )
  }
}

export default Search