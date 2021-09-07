import React, { Component } from 'react'

export default class Counter extends Component {

  state = {
    count: 1,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3'],
    status: 0
  };

  // defining properties of class
  a = 10;
  b = 20;

  render() {

    // c = 3; error, since strict mode and no 'var'/'let' keyword used
    var d = 4;

    return (<div>
      a<br></br>
      {this.a}<br></br>
      {this.b}<br></br>
      {d}<br></br>
      {this.state.imageUrl}<br></br>

      <img src={this.state.imageUrl} alt=""></img><br></br>
      <span style={{ fontSize: 50 }}>{this.formatCount()}</span><br></br>
      <button>Increment</button>
      {/* <span style="font-size:50px">abc</span> */}
      <span style={{ fontSize: 50 }}>abc</span>
      {/* loops */}
      <ul>
        {this.state.tags.map(x => <li key={x}>{x}</li>)
        }
      </ul>
      {/* conditions */}
      {this.state.status === 0 && 'Satus no set'} // this is javascript specific trick
      {/* events */}
      <button onClick={this.doSomething}>Click Me ;)</button>
      {/* how to call above with a argument i.e. this.doSomething('abc'); */}
      <button onClick={() => { this.doSomething('abc') }}>Yo, I am different</button>
    </div >);
  }

  constructor() {
    super()
    this.doSomething = this.doSomething.bind(this);
  }

  doSomething(x) {
    alert(x + " was passed to me");
    alert('I have been clicked');
    // in event handlers the this is not available, it refers to the event 
    // alert(this.state.status); "this" not available, bind it first
    alert(this.state.status); // works now
    // or you can use arrow functions
  }

  // in react, the state can't be directly changed, so use setState

  increaseCount = () => {
    // this.state.count++; // won't work
    this.setState({ count: this.state.count + 1 });
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;

  }
}