        import React from 'react';
        import './App.css';

        type TitlePropsType = {
          title: string
        }

        function App() {
          return (
            <div className="App">
              <Title title="This`s Component"/>
              <Rating/>
              <Accordion/>
            </div>
          );
        }

        function Title(props:TitlePropsType){
          return(
           <h3>
           {props.title}
           </h3>
          )
        }

        function Rating(){
          return(
            <>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
            </>
          )
        }

        function Star(){
          return(
            <div>
            Star
            </div>
          )
        }


        function Accordion(){
          return(
            <>
           <Title title='Menu' />
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
            </>
          )
        }


        export default App;
