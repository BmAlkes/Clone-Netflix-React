import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="container pt-5 pb-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <p>Questions? Contact us.</p>
                        <div className="row">
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Faq</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Help Center</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Account</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Media Center</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Investor Relations</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Jobs</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Ways to Watch</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Terms of Use</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Privacy</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Cookies Preferences</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Corporate Information</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Contact Us</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Speed Test</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Legal Notices</a>
                            </div>
                            <div className="col-6 col-md-3 mb-2">
                                <a href="">Netflix Originals</a>
                            </div>

                        </div>
                        <div className="position-relative select-globe mt-4">
                            <select>
                                <option value="">Portugues</option>
                                <option value="">Hebrew -עברית</option>
                                <option value="">Spanish</option>
                            </select>
                        </div>
                    </div>
                </div>
                </div>
         </footer>
        )
    }
}
