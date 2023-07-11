        import React from 'react';
        import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Title } from './components/title/Title';
import { Rating } from './components/rating/Rating';

       
        function App() {
          return (
            <div className="App">
              <Title title="This`s Component"/>
              <Rating/>
              <Accordion/>
            </div>
          );
        }

     
        export default App;
