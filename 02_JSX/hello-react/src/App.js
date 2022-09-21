import React from 'react';
import './App.css';
import './css/bootstrap.min.css'

function App() {
  const name = '모구모구';
  const nothing = undefined;
  return (
    <div className='container m-5'>
      {/* 1. 기본 */}
      <>
        <h1>1. 기본</h1>
        <h2>{name} 안녕!!</h2>
      </>
      <hr className='divide' />

      {/* 2. 조건부 연산자 */}
      <>
        <h1>2. 조건부 연산자</h1>
        {name === '모구모구' ? (
          <h2>모구모구입니다.</h2>
        ) : (
          <h2>모구모구가 아니에요. ㅠㅠ</h2>
        )}

        {name === '모구모구 아님' ? (
          <h2>모구모구입니다.</h2>
        ) : (
          <h2>모구모구가 아니에요. ㅠㅠ</h2>
        )}
      </>
      <hr className='divide' />

      {/* 3. AND 연산자를 활용한 조건부 렌더링 */}
      <>
        <h1>3. AND 연산자를 활용한 조건부 렌더링</h1>
        {name === '모구모구' && <h2>모구모구입니다.</h2>}
        {name === '모구모구 아님' && <h2>모구모구가 아니에요.</h2>}
      </>
      <hr className='divide' />

      {/* 4. undefined 렌더링 방지하기 */}
      <>
        <h1>4. undefined 렌더링 방지하기</h1>
        <h2>{name || 'undefined입니다.'}</h2>
        <h2>{nothing || 'undefined입니다.'}</h2>
      </>
      <hr className='divide' />

      {/* 5. 인라인 스타일링 */}
      <>
        <h1>5. 인라인 스타일링</h1>
        <h2
          style={{
            backgroundColor: 'black',
            color: 'aqua',
            fontSize: '48px',
            fontWeight: 'bold',
            padding: 16,
          }}
        >
          {name}
        </h2>
      </>
      <hr className='divide' />

      {/* 6. class 대신 className */}
      <>
        <h1>5. 인라인 스타일링</h1>
        <h2 className='text-primary p-5 m-5 border'>
          {name}
        </h2>
      </>
    </div>
  );
}

export default App;
