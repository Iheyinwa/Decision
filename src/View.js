import React,{useState}from 'react';
import Input from './Input';
import { Header} from './Components';

function Choice(props) {
  let [state, setstate] = useState();
  let question=[]
  let choice= []

  // getInput(e)(
  //   let d= choice.push(e.target.value)
  
  //   console.log(d)
  // )
  return (
    <div>
      <Header />
      <div id="main">
        <div>
          <input type="text" placeholder="enter" />
          <ul>
            <Input text="choice" onClick={}/>
            <Input text="choice" />
            <Input text="choice" />
          </ul>
        </div>
        <aside>
          <p>Frequently Asked Questions</p>
        </aside>
      </div>
    </div>
  );
}

function Result(props) {
  return (
    <div>
      <Header />
      </div>
  )
}
export { Choice, Result };
