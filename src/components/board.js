import React, { useState, Component } from 'react';
import Grid from './grid';
import Vertex from './vertex';
import './board.css';

class Goboard extends Component{
    constructor(props){
      super(props);
      this.state = {
      }
    }

    render(){
      const vertexSize = 24;
      const width = 19; 
      const height = 19;
      const xs = new Array(19).fill(0).map((_, index) => index); 
      const ys = new Array(19).fill(0).map((_, index) => index);
      const hoshis = [];
      return (
          <div className='board-container'>
              <div className='grid'  style={{width: `${width * vertexSize }px`, height: `${ height * vertexSize}px`}}>
              <Grid  vertexSize= {vertexSize} 
                     width = {width}
                     height = {height} 
                     xs = {xs}
                     ys = {ys}
                     hoshis = {hoshis}/>
              <div style={{display: 'grid', 
                          gridTemplateColumns: `repeat(${width}, auto)`, 
                          gridTemplateRows: `repeat(${height}, auto)`, 
                          zIndex: 1,
                          position: 'absolute',
                          width: '100%',
                          height: '100%',}}>
                  {
                    xs.map((x, i) => {
                      return (
                        ys.map((y, i) => {
                          let sign
                          if (i === 12) {
                            sign = 1
                          } else if (i === 11) {
                            sign = -1
                          }
                          return (
                            <Vertex 
                              sign = {sign}
                            />  
                          )
                        })
                      )
                    })
                  }
              </div>
              </div>
          </div>
      )
    }
}

export default Goboard;