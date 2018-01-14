import React, { Component } from 'react'
import logo from './../assets/img/logo.svg'
import '././../assets/css/App.css'

class App extends Component {
  state = {
    name: 'Name'
  } 

  // set event
  changeState(event){
    if(event.target.value === "1"){
      this.setState({
        name: 'Best'
      })
    }
  }

  render() {
    return (
      <div>
      <p>{this.state.name}</p>
      <button
        value="1"
        onClick={this.changeState.bind(this)}>
        change
      </button>
      </div>

    )
  } // render

}

export default App
