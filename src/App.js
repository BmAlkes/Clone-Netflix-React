import React, { Component } from 'react'
import Header from './components/HEADER'
import Home from './section/Home'
import Tv from './section/Tv'
import Propagand from './section/Propagand'
import Propagand2 from './section/Propagand2'
import Question from './section/Question'
import Footer from './components/FOOTER'
import './global.css'


export default class App extends Component{
  render(){
    return(
      <>
       <Header/>
       <Home/>
       <Tv/>
       <Propagand/>
       <Propagand2/>
       <Question/>
       <Footer/>
      </>
    )
  }
}