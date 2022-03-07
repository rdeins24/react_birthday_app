import React, { useState } from "react";
import data from "./data";
import List from "./List";
import Button from "./Button";
function App() {
 const[people,setPeople]=useState(data);
  return (
    <main >
      <div className="container">
    <b>{people.length} birthdays today</b>
 <List people={people} setPeople={setPeople}/>
 <Button setPeople={setPeople}/>
 </div>
  </main>
  );
}

export default App;
//container
