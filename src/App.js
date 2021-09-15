import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";


function App() {

  const reference = ref(db, 'Test/');

  useEffect(() => {
    callDatabase()
  }, [])

  const [head, setHead] = useState();

  function callDatabase() {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      setHead(data)
    });
  }

  console.log(head["testString"])

  return (
    <div>
      <div>{head["testString"]}</div>
      <div>Hello from React!</div>
    </div>
  );
}

export default App;
