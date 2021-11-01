import React from 'react';

function Input(props) {
  return (
    <div>
      <li>
        <input type="text" placeholder={props.text} onClick={props.onClick} />
      </li>
    </div>
  );
}
export default Input;
