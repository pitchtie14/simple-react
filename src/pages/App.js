import React, { Component } from 'react'
import logo from './../assets/img/logo.svg'
import '././../assets/css/App.css'

class App extends Component { 
  state = {
    name: []
  }

  nameState(event){
    // let name = event.target.value
    let name = this.textInput.value   
    this.setState({
      name: this.state.name.concat(name)
    })

    this.clearForm()

    console.log(this.state.names)
    
  }

  deleteState(event){
    let tmp = this.state.name.pop()
    this.setState({
      name: this.state.name
    })
  }
  clearForm(){
    this.textInput.value = ''
  }

  render() {
    return (
      <div>
        <div>
          {
              this.state.name.map(
                function(name){
                  return <p>{name}</p>
              }
            )
          }
        </div>

        <button onClick={this.deleteState.bind(this)}>Del</button>  

        <input
        type='text'
        name='textInput'
        ref={(input) => { this.textInput = input; }}/>

        <button onClick={this.nameState.bind(this)}>Add</button>

      </div>
    )
  } // render

}

export default App
