import React from 'react';
import ReactDom from 'react-dom';

class Hello extends React.Component {
  render() {
  	return (
    	  <div>
      	    <input ref={ref => this.input = ref}>
            </input>
          </div>
        )
  }

  componentDidMount() {
  	this.input.value = "I used ref to do this";
  }

}
ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);

export default Hello;
