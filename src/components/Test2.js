import React from 'react';

class Test2 extends React.Component{



  constructor(props){
    console.log('.1');
    super(props);
    this.udt = this.udt.bind(this);
  }

  componentWillMount(){
    console.log('.2');
  }
  componentDidMount(){
    console.log('.4');
  }

  componentWillReceiveProps(nextProps){
    console.log('.7');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('.8');
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('.9');
  }

  udt(){
    this.props.onUpdate3('두번째');
  }

  render(){
      console.log('.3');
      return (
          <div>
            <button onClick={this.udt}>{this.props.label}</button>
          </div>
      );
  }
}

export default Test2;
