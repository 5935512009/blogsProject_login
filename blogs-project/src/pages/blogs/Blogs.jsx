import React, { Component } from 'react'

class TestHero extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          Count: {this.state.count}
          <button onClick={this.incrementCount}>Increase</button>
        </div>
      );
    }
  }
function Blogs() {
  return (
    <div>
      <TestHero />
    </div>
  )
}

export default Blogs
