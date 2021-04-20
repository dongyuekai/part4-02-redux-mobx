import React from 'react'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'
import Modal from './components/Modal'

function App() {
  return (
    <div>
      {/* <Counter /> <br /> */}
      redux-actions：<Counter2 />
      <Modal />
    </div>
  );
}

export default App;
