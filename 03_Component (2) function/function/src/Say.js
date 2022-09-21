import React, { useState } from 'react';
import './css/bootstrap.min.css';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div className='container mt-5'>
      <button className='btn btn-outline-secondary mx-1' onClick={onClickEnter}>입장</button>
      <button className='btn btn-outline-secondary mx-1' onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button className='btn btn-outline-danger mx-1' onClick={() => setColor('red')}>
        빨간색
      </button>

      <button className='btn btn-outline-success mx-1' onClick={() => setColor('green')}>
        초록색
      </button>
      <button className='btn btn-outline-primary mx-1' onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
