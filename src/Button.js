import React from 'react'
import data from './data';

export default function Button({setPeople}) {
  function deletePeople(){
      setPeople([])
  }
 function reload(){
     setPeople(data)
 }
    return (
   <div>
<button onClick={()=>deletePeople()}>click me to clear</button>
<button onClick={()=>reload()}>click me to reload</button>
   </div>
    )
}
