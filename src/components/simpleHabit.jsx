import React, { useRef, useState } from 'react';
import '../app.css';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  // React.createRef(); = 매선 호출될때마다 새로운 레퍼런스를 생성.
  // useRef() : 한번만 만들고 메로리에 저장 후 재사용.
  const spanRef = useRef();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
