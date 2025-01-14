import React from 'react';
import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }
    increment = () => {
// У setState передаємо об'єкт зі значенням, коли ми хочемо замінити старе значення на нове.
        // this.setState({
        //     count: 5,
        // })

// Якщо нам потрібно використати попередне значення щоб отримати нове, тоді ми використовуєму у setState колбек.
this.setState((prevCount) => {  
    return {
        count: prevCount.count + 1,
    }
})
    }
    render() {
        return (
            <section className='counter'>
                <div className='counter__box'>
                    <span className='counter__number'>
                        {this.state.count}
                    </span>
                    <button onClick={this.increment} className='counter__plus'>
                        +
                    </button>
                    <button className='counter__minus'>
                        -
                    </button>
        
                </div>
            </section>
          );
    }

};

export default Counter;
