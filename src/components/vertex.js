import * as React from 'react';
import classNames from 'classnames';
import './vertex.css';


class Vertex extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    componentDidMount() {
    }

    render() {
      const { sign, marker } = this.props
      return (
        <div className='stone-container'>
          {
            sign && sign != 0 ? (
              <React.Fragment>
                <div className={classNames('stone', {white: sign == 1}, {black: sign == -1})}></div>
                <div className="stone-shadow"></div>
                {
                  marker? (
                    <div className={classNames("marker", {w: marker == -1}, {b: marker == 1})}></div>
                  ): null
                }
              </React.Fragment>
            ): null
          }
        </div>
      )
    }

}

export default Vertex