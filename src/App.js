import { Component } from 'react';

import Counter from './components/Counter/Counter';



class App extends Component {
  state = {
    test: 'test',
  }
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
 
}


export default App;
