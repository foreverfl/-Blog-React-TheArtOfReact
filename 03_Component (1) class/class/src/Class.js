import React, { Component } from 'react';
import './css/bootstrap.min.css';

class Counter extends Component {
  state = {
    increasingNumber: 0,
    fixedNumber: 0
  };
  render() { // 클래스 형태로 컴포넌트를 구현할 때는 render()가 들어가야 한다.
    const { increasingNumber, fixedNumber } = this.state; // state를 조회 할 때에는 this.state로 조회한다.
    return (
      <div className='container mt-5'>
        <h1>증가하는 값: {increasingNumber}</h1>
        <h1>바뀌지 않는 값: {fixedNumber}</h1>
        <button className='btn btn-outline-primary'
          onClick={() => {
            this.setState(
              {
                increasingNumber: increasingNumber + 1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
        &nbsp;
        <button className='btn btn-outline-primary'
          onClick={() => {
            this.setState(
              {
                increasingNumber: increasingNumber - 1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
