import { Component } from 'react';
import Fortress from './fortress.component';
import './burninglist.css';

class Burning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{world:"fire",location:[652,652],firstHit:1681304003643}],
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/data');
    const data = await response.json();
    console.log("from client",data)
    this.setState({ data });
  }
  render() {
    return (
      <div>
        {/* {fortressObj.map((F) => {
          return (<Fortress key={Math.random()} {...F}>  </Fortress>)
        }
        )} */}
        <table >
          <tr>
            <th></th><th>World</th><th>Location</th><th>Distance</th><th>Cooldown</th>
          </tr>
        
         {this.state.data.map((F) => {
          return (<Fortress key={Math.random()} {...F}/>)
        }
        )}
        </table>
      </div>
    )
  }
}
export default Burning