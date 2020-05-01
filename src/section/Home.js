import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section className="box">
            <div className="box-background position-absolute">
                <img src="./img/Bg.jpg " alt="logo"/>
            </div>
            <div className="content position-relative d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column mt-5 pd-5 mt-md-0 ">
                    <div className="d-flex justify-content-center mt-md-4">
                        <h1 className="text-white text-center font-weight-bold m-0 col-md-9 mt-md-5">
                            Movies, TV shows and more unlimited.</h1>
                    </div>
                    <h2 className="text-white text-center m-3">
                        Watch everywhere. Cancel at each step.</h2>
                    <div className="d-flex justify-content-center pt-3 pb-3 order-1 order-md-0">
                        <div className="input-group col-md-10 flex-column flex-md-row">
                            <input type="text" className="form-control" id="form" placeholder="Email"/>
                            <div className="input-group-append assine d-flex justify-content-center mt-2">
                                <button type="submit" className="input-group-text text-white pl-3 pl-md-4">OUR PRICES<svg
                                        className="ml-2 ml-md-3 mr-md-3 icon" viewBox="0 0 6 12"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#fff" d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                                            fill="none" fillRule="evenodd"></path>
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white text-center"> Want to start watching? forward. Just enter an email address to
                            create a new account or to sign in to an existing one.</h3>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
