import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
    state = {
        count: 0
    };

    add = () => {
        this.setState(current => ({ count: current.count + 1 }))
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }))
    };

    render(){
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                {/* add()이렇게 하지 않고 add이렇게만 -> 클릭할때만 호출 */}
                <button onClick={this.add}>Add</button> 
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
