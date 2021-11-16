import React from 'react';
import { useState } from 'react';
import './App.css';

const Circle = (props) => {
  return <div className="circle" style={{ backgroundColor: `#${props.setColor}` }}></div>;
};

export default function App() {
  const [circle, setCircle] = useState([]);
  
  const onAddBtnClick = (event) => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
    setCircle(
      circle.concat(<Circle setColor={randomColor}/>)
    );
  };

  const onRestBtnClick = (event) => {
    setCircle([]);
  };

  return (
    <div className="container">
      <div className="circle-section">
      <Circle setColor="FF0000" />
      {circle}
      </div>
      <div className="button-section">
      <button className="btns" onClick={onAddBtnClick}>Add</button>
      <button onClick={onRestBtnClick}>Reset</button>
      </div>
    </div>
  );
}
