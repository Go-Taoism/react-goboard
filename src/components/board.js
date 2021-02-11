import React, { useState, Component } from 'react';
import Grid from './grid';
import Vertex from './vertex';
import './board.css';

class Goboard extends Component{
    constructor(props){
      super(props);
      this.state = {
        board: this.props.signMap
      }
    }

    makeMove =  ([x,y], color) => {
      let newBoard =  this.state.board.putChess([x,y], color)
      this.setState({
        board: newBoard
      })
    }

    render(){
      const {vertexSize, width, height, xs, ys, hoshis, player} = this.props
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
                          zIndex:99,
                          width: '100%',
                          height: '100%',}}>
              {
                xs.map((x, i) => {
                  return (
                    ys.map((y, i) => {
                      return (
                        <div key = {`${x}.${y}`}  onClick = {() => this.makeMove([x, y], player)}>
                        <Vertex
                          sign={this.state.board.get([x,y])}
                        />
                        </div>
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