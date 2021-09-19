import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "./firebase-config";
import SignIn from './Components/SignIn';


function App() {

  const reference = ref(db, 'test/');

  useEffect(() => {
    loadBaseCharacter()
    callDatabase()
  }, [])

  const [head, setHead] = useState({ "string": "" });

  const [character, setCharacter] = useState([])

  function callDatabase() {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      setHead(data)
    });
  }

  function loadBaseCharacter() {
    fetch('./models/character.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setCharacter(myJson)
      });
  }

  return (
    <div>
      <SignIn />
      <form>
        Name: <input id="name" type="text" defaultValue={character.name ? "" : character.name}></input><br />
        Age: <span id="age">{character.age ? character.age : 0}</span><br />
        Characteristics:
        {character.characteristics ? character.characteristics.map(stat => {
          return (
            <div key={stat.name} id={stat.name}>
              <span id={stat.name + "_name"}>{stat.name}: </span>
              <span id={stat.name + "_score"}>{stat.values.score} </span>
              <span>{stat.values.modifier < 0 ? "" : "+"}</span><span id={stat.name + "_modifier"}>{stat.values.modifier}</span>
            </div>
          )
        }) : <div></div>}
      </form>
    </div>
  );
}

export default App;
