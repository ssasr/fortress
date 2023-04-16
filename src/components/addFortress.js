import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
function AddFortress() {
  const navigate=useNavigate()
  const [f,setF]=useState({world:"",x_location:"",y_location:"",hr:"",min:"",sec:""  })
  const fhandler=(e)=>{
    setF({...f,[e.target.name]:e.target.value})
  }
  const postData= async (e)=>{
    e.preventDefault()
    console.log(f)
    let {world,x_location,y_location,hr,min,sec }=f
    const location=[parseInt(x_location),parseInt(y_location)]
    const firstHit=Date.now()-(parseInt(hr)*3600+parseInt(min)*60+parseInt(sec))*1000
    const data={world,location,firstHit}
    console.log(JSON.stringify({world,location,firstHit}))
    const res= await fetch("http://localhost:5000/add",{
      method:"POST",
      // mode:"no-cors",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    // navigate("/home")

    // // const data=await res.json()
    // if(!data){console.log("post req failed")}
    // else{console.log(data.status)}
    
  }
  return (
    <div>
      <div className='col-6'>
        <form method='POST' className='form' encType='application/json'>
        <div>
          <label htmlFor='world' >
            what world?
          </label>
          <select name="world" id="world"  onChange={fhandler}>
      <option value="">--Please choose an option--</option>
      <option value="sand">sand</option>
      <option value="fire">fire</option>
      <option value="snow">snow</option>
  </select></div>
          <div>
          <label htmlFor='x_location' >
            what location?
          </label>
          <input type='text' id="x_location" name='x_location' placeholder='x' onChange={fhandler}></input>
          <input type='text' id="y_location" name='y_location' placeholder='y' onChange={fhandler}></input>

          </div>
          <div>
          <label htmlFor='firstHit' >
            what time
          </label>
          <input type='text' id="firstHit" name='hr' placeholder='hr' onChange={fhandler}></input>
          <input type='text' id="firstHit" name='min' placeholder='min' onChange={fhandler}></input>
          <input type='text' id="firstHit" name='sec' placeholder='sec' onChange={fhandler}></input>

          </div>
          <input type='submit' onClick={postData}></input>
        </form>
      </div>
    </div>
  )
}

export default AddFortress
