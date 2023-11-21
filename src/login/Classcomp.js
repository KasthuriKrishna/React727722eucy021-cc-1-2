import React from 'react'
import ReactDOM from 'react-dom/client'
export default class Classcomp extends React.Component {
  render() {
    return (
      <h1>Hey all {this.props.name} !!</h1>
    );
  }
}
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<Classcomp name="krish"/>);