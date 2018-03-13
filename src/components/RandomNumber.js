import React from 'react';
import ReactDOM from 'react-dom';


class RandomNumber extends React.Component {
    updateNumber(){
        console.log('업데이트넘버');
        let value = Math.round(Math.random()*100);
        console.log('업데이트넘버에서 만든 숫자'+value);
        this.props.onUpdate2(value);
    }

    updateBtnName(){
      this.setState({btn_name:"바꼈지롱"});
    }

    constructor(props){
        console.log(props);
        super(props); // 슈퍼가 없으면 디스가 안되네! React.Component를 상속받는거
        this.updateNumber = this.updateNumber.bind(this);
        this.rmBtn = this.rmBtn.bind(this);
        console.log('랜덤넘버 생성자');
        console.log(this.props.onUpdate);

        this.state = {
          btn_name:"클릭더버튼"
        }
    }

    rmBtn(e){
      console.log(e.currentTarget.style);
      e.currentTarget.remove();
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
                <button onClick={this.rmBtn}>asdf</button>
                <button onClick={this.updateBtnName.bind(this)}>{this.state.btn_name}</button>
            </div>
        );
    }
}

export default RandomNumber;
