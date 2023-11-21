import React, { Component } from 'react'

export default class Class_state extends Component {
    constructor(props){
        super(props);
        this.state={count1:0}
    }
handleinc=()=>{
    this.setState(prevState=>({count1:prevState.count1+1}))
}
handledec=()=>{
    if(this.state.count1>0){
        return(this.setState(prevState=>({count1:prevState.count1-1})))
    }
    else{
        return(this.setState(prevState=>({count1:prevState.count1=0})))
    }
}
  render() {
    return (
      <div>
      <center>
      <button onClick={this.handleinc}> + </button>
      {this.state.count1}
      <button onClick={this.handledec}> - </button>
      </center>
      </div>
    )
  }
}
