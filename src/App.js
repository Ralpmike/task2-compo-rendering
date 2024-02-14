import React from 'react';
import Card from "./components/Card";
import {cardDetails} from './components/data'



function App() {
 
  return <div>
    <Card details={cardDetails}/>
   
  </div>;
}

export default App;
