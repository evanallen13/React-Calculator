import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ClearButton } from './components/ClearButton'
import * as mathjs from 'mathjs'

class App extends Component {
  state = {  
    input: ''
  }

  addToInput = val =>{
    if(val !== '÷' && val !== 'x' && val !== '%'){
      this.setState({input: this.state.input + val})
    }else if(val === '÷'){
      this.setState({input: this.state.input + '/'})
    }else if(val === 'x'){
      this.setState({input: this.state.input + '*'})
    }else if(val === '%'){
      this.setState({input: mathjs.evaluate(this.state.input + '/100')})
    }
  }
  handleEqual = val =>{
    this.setState({input: mathjs.evaluate(this.state.input)})
  }
  handleSignChange = val =>{
    this.setState({input: mathjs.evaluate('-' + this.state.input)})
  }

  render() { 
    return (
      <div className="app">
          <div className="calc-wrapper">
            <Input input={this.state.input}></Input>
              <div className="row">
              <ClearButton handleClear={()=> this.setState({input:''})}>AC</ClearButton>
                <Button handleClick={this.handleSignChange}>+/-</Button>
                <Button handleClick={this.addToInput}>%</Button>
                <Button handleClick={this.addToInput}>÷</Button>
              </div>
              <div className="row">
                <Button handleClick={this.addToInput}>7</Button>
                <Button handleClick={this.addToInput}>8</Button>
                <Button handleClick={this.addToInput}>9</Button>
                <Button handleClick={this.addToInput}>x</Button>
              </div>
              <div className="row">
                <Button handleClick={this.addToInput}>4</Button>
                <Button handleClick={this.addToInput}>5</Button>
                <Button handleClick={this.addToInput}>6</Button>
                <Button handleClick={this.addToInput}>-</Button>
              </div>
              <div className="row">
                <Button handleClick={this.addToInput}>1</Button>
                <Button handleClick={this.addToInput}>2</Button>
                <Button handleClick={this.addToInput}>3</Button>
                <Button handleClick={this.addToInput}>+</Button>
              </div>
              <div className="row">
                <Button handleClick={this.addToInput}>0</Button>
                <Button handleClick={this.addToInput}>00</Button>
                <Button handleClick={this.addToInput}>.</Button>
                <Button handleClick={this.handleEqual}>=</Button>
              </div>
          </div>
      </div>
    )
  }
}
 
export default App;

