import {Component} from 'react';
import Fortress from './fortress.component';
import './burninglist.css';
let fortressObj=[{
    world:'fire peaks',
    location:[672,678],
    coolDown:[15,30,6],
    isBurning:true,
},
{
  world:'fire peaks',
  location:[672,711],
  coolDown:[8,50,6],
  isBurning:true,
},
{
  world:'fire peaks',
  location:[672,678],
  coolDown:[15,30,6],
  isBurning:true,
},
{
  world:'fire peaks',
  location:[672,678],
  coolDown:[15,30,6],
  isBurning:true,
},
{
  world:'fire peaks',
  location:[672,678],
  coolDown:[15,30,6],
  isBurning:true,
},
{
  world:'fire peaks',
  location:[672,678],
  coolDown:[15,30,6],
  isBurning:true,
},
{
  world:'fire peaks',
  location:[672,678],
  coolDown:[15,30,6],
  isBurning:true,
},
]
let cooldownCal= (hr,min,sec)=>{
  return((Date.now()-(hr*3600+min*60+sec)*1000))
}
fortressObj=fortressObj.map((F)=>{
  const {world,location,coolDown,isBurning}=F
return({world,location,coolDown:cooldownCal(...coolDown),isBurning})
})
class Burning extends Component {
    render() {
      return (
        <div>
          {fortressObj.map((F) =>{
          return(<Fortress key={Math.random()} {...F}>  </Fortress>)
        }
          )}
      </div>
      )
    }
  }
  export default Burning