import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";


function App() {

  const reference = ref(db, 'test/');

  useEffect(() => {
    callDatabase()
  }, [])

  const [head, setHead] = useState({"string": ""});

  function callDatabase() {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      setHead(data)
    });
  }

  console.log(head)

  return (
    <div>
      <div>{head["string"]}</div>
      <div>Hello from React!</div>
    </div>
  );
}

export default App;
