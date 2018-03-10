import React from 'react';
import ReactDOM from 'react-dom';


class RandomNumber extends React.Component {
    updateNumber(){
        console.log('업데이트넘버');
        let value = Math.round(Math.random()*100);
        console.log('업데이트넘버에서 만든 숫자'+value);
        this.props.onUpdate2(value);
    }

    constructor(props){
        console.log(props);
        super(props); // 슈퍼가 없으면 디스가 안되네! React.Component를 상속받는거
        this.updateNumber = this.updateNumber.bind(this);
        console.log('랜덤넘버 생성자');
        console.log(this.props.onUpdate);
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
