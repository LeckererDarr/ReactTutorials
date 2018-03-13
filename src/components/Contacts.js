import React from 'react';
import update from 'react-addons-update'

class Contacts extends React.Component {

    updateList(){
      this.setState({
        contactData: update(
          this.state.contactData,
          {
              $push:[
                {name:'다슬', phone2:"010-5144-7540"},
                {name:'펭귄', phone:"010-4534-7136"}
              ]
          }
        )
      });
    }

    _insertContact(name, phone){
        this.setState({
          contactData: update(
            this.state.contactData,
            {
              $push:[{name:name, phone:phone}]
            }
          )
        });
        /*let newState = update(
          this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);*/
    }

    removeList(){
      this.setState({
        contactData: update(
          this.state.contactData,
          {
            $splice: [[-1, 1]]
          }
        )
      });
    }

    changeList(){
      this.setState({
        contactData: update(
          this.state.contactData,
          {
            [0] : {
              name:{$set:"김만각"},
              phone:{$set:"번호가 없습니다"}
            }
          }
        )
      });
    }

    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-00024"}
            ],
            selectedKey: -1,
            selected: {
                name: "",
                phone: ""
            }
        };

        this.updateList = this.updateList.bind(this);
        this.removeList = this.removeList.bind(this);
        this.changeList = this.changeList.bind(this);
        this._insertContact = this._insertContact.bind(this);
    }
    _onSelect(key){
        console.log('스테이트 셀렉티드키',this.state.selectedKey);
        if(key==this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: "",
                    phone: ""
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + " is selected");
    }
    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }

    _removeContact(){
        if(this.state.selectedKey==-1){
            console.log("contact not selected");
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }

    onInsert2(a,b){
      console.log(a,b);
    }

    _editContact(name, phone){
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
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
                      console.log(i); // isSelected={this._isSelected.bind(this)(i)
                      return (
                          <ContactInfo name={contact.name}
                                      phone={contact.phone}
                                      key={i}
                                      contactKey={i}
                                      isSelected={this._isSelected.bind(this)}
                                      onSelect={this._onSelect.bind(this)}/>
                      );
                  })}
                </ul>
                <button onClick={this.updateList}>어펜드</button>
                <button onClick={this.removeList}>스플라이스</button>
                <button onClick={this.changeList}>체인지</button>
                <ContactCreator onInsert={this._insertContact}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)}
                           isSelected={(this.state.selectedKey !=-1)}
                              contact={this.state.selected}/>
            </div>
        );
    }
}


class ContactInfo extends React.Component {
    handleClick(){
        //console.log('click li');
        console.log('클릭시 컨택트 키',this.props.contactKey);
        this.props.onSelect(this.props.contactKey);
        //console.log(this.props.contactKey);
    }
    shouldComponentUpdate(nextProps, nextState){
    	return (JSON.stringify(nextProps) != JSON.stringify(this.props));	
    }
    render() {
      console.log("rendered: " + this.props.name);
        let getStyle = (isSelect) => {
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };

        return(
            <li style={getStyle(this.props.isSelected(this.props.contactKey))}
              onClick={this.handleClick.bind(this)}>
              {this.props.name} {this.props.phone}
            </li>
        );
    }
}

class ContactCreator extends React.Component {
    handleChange(e){
        console.log(e);
        console.log(e.target.id);
        console.log(e.target.value);
        var nextState = {};
        nextState[e.target.id] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
      this.props.onInsert(this.state.name, this.state.phone);
      this.setState({
          name: "",
          phone: ""
      });
    }

    constructor(props) {
        super(props);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" id="name" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" id="phone" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/>
                    <button onClick={this.handleClick.bind(this)}>
                    Insert
                    </button>
                </p>
            </div>
        );
    }
}

class ContactRemover extends React.Component {
    handleClick() {
        this.props.onRemove();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                Remove selected contact
            </button>
        );
    }
}

class ContactEditor extends React.Component {
    constructor(props) {
        super(props);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };
        console.log('컨텍에딧 생성자')
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        });
        console.log('컨텍에딧 리시즈');
    }
    handleClick(){
        if(!this.props.isSelected){
            console.log("contact not selected");

            return;
        }

        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        console.log(nextState);
        this.setState(nextState);
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                    Edit
                    </button>
                </p>
            </div>
        );
    }
}

export default Contacts;
