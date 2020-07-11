import React, { useState } from 'react';
import './index.css';
import './style-border.css';

function App() {
  const [ boxText, setBoxText ] = useState('box-model')
  const [ topLeft, setTopLeft ] = useState(0)
  const [ topRight, setTopRight ] = useState(0)
  const [ bottomLeft, setBottomLeft ] = useState(0)
  const [ bottomRight, setBottomRight ] = useState(0)

  function borderTopLeft(value){
    setTopLeft(value)
  }

  function borderTopRight(value){
    setTopRight(value)
  }

  function borderBottomLeft(value){
    setBottomLeft(value)
  }

  function borderBottomRight(value){
    setBottomRight(value)
  }

  return (
    <div className="main">
      <header>
        <h1>Border Radius Previewer</h1>
      </header>

      <div className="content">

         <div className="box">

           <div className="inputs">
             <input type="number" value={topLeft} onChange={(e) => borderTopLeft(e.target.value)}/>
             <input type="number" value={bottomLeft} onChange={(e) => borderBottomLeft(e.target.value)}/>
           </div>

           <div className="box-model">
             <span>{boxText}</span>
           </div>

           <div className="inputs">
             <input type="number" value={topRight} onChange={(e) => borderTopRight(e.target.value)}/>
             <input type="number" value={bottomRight} onChange={(e) => borderBottomRight(e.target.value)}/>
           </div>

         </div>

          <button>copy css</button>

          <div>TopLeft: {topLeft} TopRigth: {topRight} bottomLeft: {bottomLeft} bottomRight: {bottomRight}</div>

      </div>
    </div>
  );
}

export default App;
