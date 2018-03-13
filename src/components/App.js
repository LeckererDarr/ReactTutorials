import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';
import ContactInfo from './Contacts';
import Test from './Test';
// http://twinw.tistory.com/184 node 업그레이드
//

class App extends React.Component {
    updateValue(randomValue){
        console.log('업데이트벨류');
        console.log('업데이트벨류에 들어온거'+randomValue);
        this.setState({
            value: randomValue
        });
    }

    constructor(props){

        super(props); // 슈퍼가 없으면 디스가 안되네! React.Component를 상속받는거
        console.log(props);

        this.state = {
            value: Math.round(Math.random()*100)
        };
        console.log('앱 생성자');
        this.updateValue = this.updateValue.bind(this);
    }

    render(){
      let t_arr = [
        {name: "1", phone: "010-0000-0001"},
        {name: "2", phone: "010-0000-0002"},
        {name: "3", phone: "010-0000-0003"},
        {name: "4", phone: "010-0000-00024"}
      ]
        return  (
            <div>
              <Header title={ this.props.headerTitle }/>
              <Content title="{ this.props.contentTitle }"
                        body={ this.props.contentBody }/>
              <RandomNumber number={this.state.value}
                        onUpdate2={this.updateValue} />
              <Contacts />
              <Test t_arr={t_arr}/>
            </div>
        );
    }
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 5,
  contentBody: undefined

};

export default App;


//
// class App extends React.Component {
//   sayHey(){
//      alert("hey");
//   }
//
//   render(){
//     let text = "Dev-Server";
//
//     let pStyle = {
//         color: 'aqua',
//         backgroundColor: 'black'
//     };
//
//     return  (
//         <div>
//             <h1> Hello Velopert </h1>
//             <h2> Welcome to {text}</h2>
//             <button onClick= {this.sayHey}>Click Me</button>
//             <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
//         </div>
//     );
//   }
// }
//
// export default App;
