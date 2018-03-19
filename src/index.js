import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
ReactDOM.render(<App headerTitle = "Welcome!"
                     contentTitle = "Stranger,"
                     contentBody2 = "Welcome to example app"/>, rootElement);



class Hello extends React.Component {
  render() {
  	return (
   	  <div>
     	    <input ref="myInput">
           </input>
         </div>
       )
  }

  componentDidMount() {
  	this.refs.myInput.value = "I used ref to do this";
  }

}
ReactDOM.render(<Hello/>,document.getElementById('app'));

class Hello2 extends React.Component {
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
ReactDOM.render(<Hello2/>,document.getElementById('app'));




class Hello3 extends React.Component {
    handleClick() {
    	  this.textBox.input.value = "I used ref";
    }

    render() {
  	    return (
    	    <div>
      	    <TextBox ref={ref=>this.textBox = ref}/>
            <button onClick={this.handleClick.bind(this)}>Click Me</button>
          </div>
        )
  }
}

class TextBox extends React.Component {
    render() {
        return(
        	<input ref={ref => this.input = ref}>
          </input>
        )
    }
}

ReactDOM.render(
  <Hello3/>,
  document.getElementById('app')
);

class Hello4 extends React.Component {
    handleClick() {
    	  this.input3.value = "";
          this.input3.focus();
    }

    render() {
  	return (
    	    <div>
      	        <input ref={ref=> this.input3 = ref}/>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );
  }
}


ReactDOM.render(
  <Hello4/>,
  document.getElementById('app')
);
