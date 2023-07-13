import React from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Title } from './components/title/Title';
import { Rating } from './components/rating/Rating';


function App() {
  return (
    <div className="App">
      <h1><Title title="This`s Component" /></h1>
      <Rating value={1} />
      <Accordion colapsed={true}/>
      <Rating value={3} />
      <Accordion colapsed={false}/>
    </div>
  );
}


export default App;
