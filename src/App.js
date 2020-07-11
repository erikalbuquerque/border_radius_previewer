import React from 'react';
import './index.css';
import './style-border.css';

function App() {
  return (
    <div className="main">
      <header>
        <h1>Border Radius Previewer</h1>
      </header>

      <div className="content">

         <div className="box">

           <div className="inputs">
             <input type="number" value="0"/>
             <input type="number" value="0"/>
           </div>

           <div className="box-model">
             <span>box-model</span>
           </div>

           <div className="inputs">
             <input type="number" value="0"/>
             <input type="number" value="0"/>
           </div>

         </div>

          <button>copy css</button>

      </div>
    </div>
  );
}

export default App;
