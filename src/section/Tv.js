import React, { Component } from 'react'

export default class Tv extends Component {
    render() {
        return (
            <section className="container pt-5 pb-5">
        <div className="row">
            <div className="col-md-6 d-flex align-items-center">
                <div>
                    <h1 className="title text-white font-weight-bold mb-4s">Watch TV Enjoyment.</h1>
                    <h2 className="subtitle text-white">You can watch Netflix on smart TVs, Playstation, Xbox, Chromecast,
                        Apple TV, Blu-ray players and
                        more</h2>
                </div>
            </div>
            <div className="col-md-6">
                <div className="position-relative video-tv">
                    <img className="img-fluid" src="./img/tv.png" alt="tv"/>
                    <video className="our-story-card-video" autoPlay playsInline muted loop>
                        <source src="./img/video-tv.m4v" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </section>
    
        )
    }
}
