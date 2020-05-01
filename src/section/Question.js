import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        return (
            <section>
            <div className="container pt-5 pb-5 perguntas">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="text-white text-center font-weight-bold">Frequently Asked Questions</h1>
                    </div>
                    <div className="col-md-9">
                        <div className="accordion mt-5" id="accordion">
                            <div className="form-group">
                                <button type="button" data-toggle="collapse" data-target="#one">What is Netflix?
                                    <span>+</span>
                                </button>
                                <div id="one" className="collapse" data-parent="#accordion">
                                    <div className="card-body pl-4 pr-4">Netflix is a streaming service that offers a wide
                                        variety of award-winning TV shows, movies, anime, documentaries, and more on
                                        thousands of internet-connected devices.

                                        You can watch as much as you want, whenever you want without a single commercial
                                        – all for one low monthly price. There's always something new to discover and
                                        new TV shows and movies are added every week!</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" data-toggle="collapse" data-target="#two">How much does Netflix
                                    cost?
                                    <span>+</span>
                                </button>
                                <div id="two" className="collapse" data-parent="#accordion">
                                    <div className="card-body pl-4 pr-4">Watch Netflix on your smartphone, tablet, Smart TV,
                                        laptop, or streaming device, all for one low fixed monthly fee. Plans start from
                                        ₪32.90 a month. No extra costs or contracts.!</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" data-toggle="collapse" data-target="#three">Where I can Watch?
                                    <span>+</span>
                                </button>
                                <div id="three" class="collapse" data-parent="#accordion">
                                    <div className="card-body pl-4 pr-4">Watch anywhere, anytime, on an unlimited number of
                                        devices. Sign in with your Netflix account to watch instantly on the web at
                                        netflix.com from your personal computer or on any internet-connected device that
                                        offers the Netflix app, including smart TVs, smartphones, tablets, streaming
                                        media players and game consoles.

                                        You can also download your favorite shows with the iOS, Android, or Windows 10
                                        app. Use downloads to watch while you're on the go and without an internet
                                        connection. Take Netflix with you anywhere.</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" data-toggle="collapse" data-target="#four">How do I cancel?
                                    <span>+</span>
                                </button>
                                <div id="four" className="collapse" data-parent="#accordion">
                                    <div className="card-body pl-4 pr-4">Netflix is flexible. There are no pesky contracts
                                        and no commitments. You can easily cancel your account online in two clicks.
                                        There are no cancellation fees – start or stop your account anytime.</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" data-toggle="collapse" data-target="#five">What can I watch on
                                    Netflix?
                                    <span>+</span>
                                </button>
                                <div id="five" className="collapse" data-parent="#accordion">
                                    <div class="card-body pl-4 pr-4">Netflix has an extensive library of feature films,
                                        documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch
                                        as much as you want, anytime you want..</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-center pt-3 pb-3 order-1 order-md-0">
                                <div className="input-group flex-column flex-md-row card-body">
                                    <input type="text" className="form-control" id="form" placeholder="Email"/>
                                    <div className="input-group-append assine d-flex justify-content-center mt-2">
                                        <button type="submit" className="input-group-text text-white pl-3 pl-md-4"
                                            id="button1">OUR PRICES<svg className="ml-2 ml-md-3 mr-md-3 icon"
                                                viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#fff"
                                                    d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                                                    fill="none" fillRule="evenodd"></path>
                                            </svg></button>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-white text-small text-center">Ready to watch? Enter your email to create or
                                access your account.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
