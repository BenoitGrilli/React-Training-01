import React from 'react';
import ReactDOM from "react-dom";

import WaterTank from './WaterTank';
import AddButton from './AddButton';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            waterLevel: 50
        }
    }
    
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            waterLevel: 50
            }
        }

    handleAdd = () => {
        if (this.state.waterLevel ===100) {
            return;
        }
        this.setState((prevState) => ({
            waterLevel: prevState.waterLevel +10
        }));
    }

    render() {
        return (
            <div>
                <WaterTank waterLevel={this.state.waterLevel} />
                <AddButton handleAdd={this.handleAdd} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
