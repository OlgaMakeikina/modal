import {useState} from 'react';

import './App.css';
import Modal from './Modal/Modal';
import Content from './Modal/Content';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick = { () => setIsOpen(true)}>Open Modal</button>
      {
        isOpen && 
        <Modal setIsOpen={setIsOpen}>
          <Content setIsOpen={setIsOpen}/>npm start
        </Modal>
      }
    </div>
  );
}

export default App;
