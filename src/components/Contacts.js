import React from 'react';

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-00024"}
            ]
        };
    }

    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                /*
                arr.map(callback, [thisArg])
                callback 새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가집니다.
                  currentValue 현재 처리되고 있는 요소
                  index 현재 처리되고 있는 요소의 index 값
                  array 메소드가 불려진 배열
                thisArg (선택항목) callback 함수 내부에서 사용 할 this 값을 설정


                */

                  {this.state.contactData.map((contact, i) => {
                      console.log(i);
                      return (
                          <ContactInfo name={contact.name}
                                      phone={contact.phone}
                                      key={i}/>
                      );
                  })}
                </ul>
            </div>
        );
    }
}


class ContactInfo extends React.Component {
    render() {
        return(
            <li>{this.props.name} {this.props.phone}</li>
        );
    }
}

export default Contacts;
