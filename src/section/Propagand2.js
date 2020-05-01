import React, { Component } from 'react'

export default class Propagand2 extends Component {
    render() {
        return (
            <section className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className="title text-white font-weight-bold mb-4s">Watching everywhere</h1>
                        <h2 className="subtitle text-white">
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                        </h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="position-relative video-tv">
                        <img className="img-fluid" src="./img/device-pile.png" alt=""/>
                        <video className="our-story-card-video2" autoPlay playsInline muted loop>
                            <source src="./img/video-devices.m4v" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
