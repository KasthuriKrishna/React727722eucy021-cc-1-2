import React, { Component } from 'react'
import './Ecoms.css'
export default class Ecom extends Component {
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
handlealert=()=>{
  alert(this.state.count1+" "+this.props.item+" added")
}
  render() {
    return (
      <body className='b'>
      <table className='tbl'>
      <tbody>
      <tr>
      <td className='tab'>
      <img src={this.props.image} alt="error"/>
      </td>
      <td className='tab'><h4>{this.props.item}</h4></td>
      <td className='tb'><button onClick={this.handleinc}> + </button></td>
      <td className='tb'>{this.state.count1}</td>
      <td className='tb'><button onClick={this.handledec}> - </button></td>
      <td className='tab'><button onClick={this.handlealert}>ADD</button></td>
      </tr>
      </tbody>
      </table>
      </body>
    )
  }
}
