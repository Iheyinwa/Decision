import React from 'react';
import { Choice, Result } from './View';
import Input from './Input';

function Decision(props) {
  const isDecision = props.isDecision;
  const isAdd = props.isAdd;
 const d = <Input text="choice" />
  if (isDecision) {
    if (isAdd) {
      let u= ul.appendChild(d);
      return u;
    }
    return <Choice />;
  }
  return <Result />;
}
export default Decision;
