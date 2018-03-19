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
    /*
    컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

    -> 그렇다면 컴포넌트가 완성되고 ajax를 요청한뒤에 상위 컴포에 보낸뒤 렌더를 할 수 있겠군
    -> 혹은 환성되고 ajax를 요청한 뒤에 그 데이터를 그 컴포넌트에서 setState할 수 있겠군
    */
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
