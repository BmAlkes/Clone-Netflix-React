import React, { Component } from 'react'

export default class Propagand extends Component {
    render() {
        return (
            <section>
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-6 order-1 order-md-0">
                    <div classNames="position-relative mobile">
                        <img className="img-fluid" src="./img/mobile-0819.jpg" alt=""/>
                        <div className="mobile-card d-flex justify-content-between align-items-center p-2">
                            <div className="card-image">
                                <img src="/img/boxshot.png" alt=""/>
                            </div>
                            <div className="content">
                                <h5 className="text-white m-0">Stranger Things</h5>
                                <label>Download...</label>
                            </div>
                            <div className="gif">
                                <img src="./img/download-icon.gif" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className="title text-white font-weight-bold mb-4s">You can download your favorite series and
                            watch them outside your home.</h1>
                        <h2 className="subtitle text-white"> Viewing your favorite content without an internet connection
                            will save you the browsing package.</h2>
                    </div>
                </div>
            </div>
        </div>


    </section>
        )
    }
}
