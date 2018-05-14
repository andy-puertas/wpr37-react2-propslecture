import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div>
              <p onClick={() => this.props.testFn()}
              >Click Me</p>
            </div> 
        )
    }
}

export default Child;