import * as React from 'react';
import './grid.css';


class Grid extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    componentDidMount() {
    }

    
    render() {
        let {vertexSize, width, height, xs, ys} = this.props;
        return (
            <svg className='board-grid'>
                {
                    xs.map((_, i) => {
                        return (
                            <rect x = { i * vertexSize + vertexSize / 2 } 
                                  y = { vertexSize / 2 } 
                                  width = { 1 } 
                                  height = { (width - 1)  * vertexSize }
                                  key = { i }
                            />
                        )
                    })
                }
                {
                    ys.map((_, i) => {
                        return (
                            <rect x = { vertexSize / 2} 
                                  y = {i * vertexSize + vertexSize / 2}
                                  width = { (height - 1) * vertexSize } 
                                  height = { 1 }
                                  key = { i }
                            />
                        )
                    })
                }
            </svg>
        )
    }

}

export default Grid