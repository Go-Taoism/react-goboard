import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Goboard from './components/board';
import { goBoard } from '@anarchy_zzh/goboard'
const signMap = [
  [1, -1, 0, -1, -1, -1, 1, 0, 1, 1, -1, -1, 0, -1, 0, -1, -1, 1, 0],
  [0, 0, -1, 0, -1, 1, 1, 1, 0, 1, -1, 0, -1, -1, -1, -1, 1, 1, 0],
  [0, 0, -1, -1, -1, 1, 1, 0, 0, 1, 1, -1, -1, 1, -1, 1, 0, 1, 0],
  [0, 0, 0, 0, -1, -1, 1, 0, 1, -1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, -1, 0, -1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, -1, 0, 0, -1, -1, 1, 0, -1, -1, 1, -1, -1, 0, 1, 0, 0, 1],
  [0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1],
  [0, 0, -1, 1, 1, 0, 1, -1, -1, 1, 0, 1, -1, 0, 1, -1, -1, -1, 1],
  [0, 0, -1, -1, 1, 1, 1, 0, -1, 1, -1, -1, 0, -1, -1, 1, 1, 1, 1],
  [0, 0, -1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1],
  [-1, -1, -1, -1, 1, 1, 1, -1, 0, -1, 1, -1, -1, 0, -1, 1, 1, -1, 0],
  [-1, 1, -1, 0, -1, -1, -1, -1, -1, -1, 1, -1, 0, -1, -1, 1, -1, 0, -1],
  [1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 0, 1, -1, 0, -1, 1, -1, -1, 0],
  [0, 1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, 1, -1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, -1, -1, 0, 1, -1, 1, -1, 1, -1, 0, -1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, -1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, -1, 0, -1, -1, 1, 1, 1, 1, -1, -1, -1],
  [0, 0, 0, 0, 0, 1, 1, -1, 0, -1, -1, 1, 1, 1, 1, 0, 1, -1, 1],
  [0, 0, 0, 0, 0, -1, -1, -1, -1, 0, -1, -1, 1, 1, 0, 1, 0, 0, 0]
]
const vertexSize = 24;
const width = 19; 
const height = 19;
const xs = new Array(19).fill(0).map((_, index) => index); 
const ys = new Array(19).fill(0).map((_, index) => index);
const hoshis = [];


const App = () => {
  const [color, setColor] = useState(1);
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Goboard  vertexSize={vertexSize}
                width = {width}
                height = {height}
                xs = {xs}
                ys = {ys}
                hoshis = {hoshis}
                player = {color}
                signMap = {new goBoard( width, signMap)}
      />

      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div 
            style={{width: '20px', height: '20px', borderRadius: '50%', background: 'black'}}
            onClick={() => setColor(-1)}
            ></div>
          <div 
            style={{width: '20px', height: '20px', borderRadius: '50%', background: 'gray'}}
            onClick={() => setColor(1)}
            ></div>
      </div>
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));