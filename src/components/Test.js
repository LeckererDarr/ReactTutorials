import React from 'react';
import update from 'react-addons-update'


class Test extends React.Component {

/*
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
    }*/

    constructor(props){
      super(props);

      this.state = {
        t_r : this.props.t_arr
      };
      console.log('test js 생성자');
    }

    componentWillReceiveProps(nextProps){
      console.log('test recieve props');
    }
    // 
    // shouldComponentUpdate(nextProps, nextState){
    // 	return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    // }

    editBtn(){
      this.setState({
        t_r: update(
          this.state.t_r,
          {
            [0] : {
              name:{$set:"김만각"},
              phone:{$set:"번호가 없습니다"}
            }
          }
        )
      });
    }

    render(){
        return (
            <div>
              <ul>
                {this.state.t_r.map((contact,i) => {
                  console.log('asdf');
                  return (
                    <li>{contact.name},{contact.phone}</li>
                  );
                })}
              </ul>
              <button onClick={this.editBtn.bind(this)}>뚜따띠</button>
            </div>
        );
    }
}

export default Test;
