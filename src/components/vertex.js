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
      const { sign } = this.props
      return (
        <div className='stone-container'>
          {
            sign && sign != 0 ? (
              <React.Fragment>
                <div className={classNames('stone', {black: sign == 1}, {white: sign == -1})}></div>
                <div className="stone-shadow"></div>
              </React.Fragment>
            ): null
          }
        </div>
      )
    }

}

export default Vertex