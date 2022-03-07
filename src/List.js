import React from "react";
import Button from "./Button";

const List = ({ people,setPeople }) => {
  return (
    <div>
      <section>
        {people.map((person) => {
          const { name,age,image } = person;
         
          return (
            <div className="person">
              <img src={image} />
              <div>
                <h4>{age} years old</h4>
                <p>{name}</p>
             
              </div>
            </div>
          );
        })}
      
      </section>
    </div>
  );
};

export default List;
//person
