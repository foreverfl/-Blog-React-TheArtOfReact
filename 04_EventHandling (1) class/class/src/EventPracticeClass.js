import React, { Component } from 'react';
import './css/bootstrap.min.css';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 키로 사용된다.
    });
  };
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div className='container mt-5'>
        <h1>이벤트 연습</h1>
        <input
          className='form-control m-1'
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          className='form-control m-1'
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className='d-grid gap-2'>
          <button
            className='btn btn-outline-primary m-1'
            onClick={this.handleClick}>확인
          </button>
        </div>
      </div>
    );
  }
}
export default EventPractice;
