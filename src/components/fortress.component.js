import React from "react";
import { Component } from 'react';
// const sand= '../../public/sand.jpg'
const fire = './fire.jpg';
// const BurningSand= '../../public/BurningSand.jpeg'
// const BurningFire= '../../public/BurningFire.jpeg'
class Fortress extends Component {
    constructor(props) {
        super(props)
        const myLoc = [665, 685]
        this.state = {
            distance: Math.round(Math.hypot(myLoc[0]-this.props.location[0],myLoc[1]-this.props.location[1])),
            cooldown: Math.floor((Date.now()-this.props.firstHit)/3600000), 
            time: Date.now() / 1000
        }
    }

    render() {
        return (
                <tr className="tr">
                    <td>
                        <img src={fire} alt='no img' className="fort"/>
                    </td><td>
                        {this.props.world}
                    </td><td>
                        {this.props.location[0]}:{this.props.location[1]}
                    </td><td>
                        {this.state.distance}
                    </td><td>
                        {this.state.cooldown}</td>
                </tr>
        )
    }
}
export default Fortress