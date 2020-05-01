import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="position-absolute w-100 pt-1">
               <div className="ml-3 mr-3 ml-md-5 mr-md-5 p-2 pt-4">
                 <div className="d-flex align-items-center">
                   <img className="logo" src="./img/logo.svg" alt="Netflix-logo"/>
                     <div className="ml-auto">
                        <a href="" className="btn-login">Enter</a>
                    </div>
                </div>
              </div>
        </header>
        )
    }
}
