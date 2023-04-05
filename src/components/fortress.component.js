import React from "react";
import {Component} from 'react';
// const sand= '../../public/sand.jpg'
const fire= './fire.jpg'
// const BurningSand= '../../public/BurningSand.jpeg'
// const BurningFire= '../../public/BurningFire.jpeg'
class Fortress extends Component {
    // {world,location,distance,countDown,isBurning}=this.props
    // cooldownCal= (hr,min,sec)=>{
    //     return((Date.now()-(hr*3600+min*60+sec)*1000))
    //   }
    render(){
        
        const myLoc=[665,685]
        return(
            <div>
                <img src={fire} alt='no img'></img>
                <span>this is {this.props.world}  </span>
                <span> time {this.props.coolDown}  </span>
                <span>{this.props.location[0]} :  {this.props.location[1]}  </span>
                <span>{Math.round(Math.hypot(myLoc[0]-this.props.location[0],myLoc[1]-this.props.location[1]))}  </span>
                <h2>{Date()}</h2>
            </div>
        )
    }
}
export default Fortress