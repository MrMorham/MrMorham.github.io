import React, { useState } from 'react'
import { callDatabase } from './firebase';

function App() {

  const [head, setHead] = useState(callDatabase());

  return (
    <div>
      <div>{head}</div>
      <div>HELLO WORLD</div>
    </div>
  );
}

export default App;
