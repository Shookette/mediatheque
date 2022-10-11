import React from 'react';
import WithFirestore from './WithFirestore';

import Counter from './Counter';
import './App.css';

function App() {
  return (
      <WithFirestore>
        <div className="App">
          <Counter></Counter>
        </div>
      </WithFirestore>
  );
}

export default App;
