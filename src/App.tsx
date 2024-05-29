import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Tpost } from './types.ts/commontypes';
import { AppContext } from './context/appcontext';
import Cards from './components/body';


function App() {
  const [jsonData, setJsonData] = useState<Tpost[]>()


  const propTypes = { jsonData, setJsonData }

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(json => setJsonData(json.posts))



  }, [])
  console.log(jsonData)

  return (

    <AppContext.Provider value={propTypes}>

      <Navbar></Navbar>
      <Cards></Cards>

    </AppContext.Provider>
  );
}

export default App;
