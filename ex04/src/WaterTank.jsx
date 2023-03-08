import React from 'react';
import './WaterTank.css';


class WaterTank extends React.Component {
    render() {
        return (
            <div className="WaterTank">
                <div className="WaterLevel" style={{height: this.props.waterLevel + "%"}} ></div>
            </div>
        )
    }
}

export default WaterTank;