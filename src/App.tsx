import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Tpost } from './types.ts/commontypes';
import { AppContext } from './context/appcontext';
import Cards from './components/body';
import Textarea from './components/nuovopost'


function App() {
  const [jsonData, setJsonData] = useState<Tpost[]>();
  const [checked, setChecked] = useState(false);


  const propTypes = { jsonData, setJsonData, checked, setChecked };

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(json => setJsonData(json.posts))



  }, [])
  console.log(jsonData)

  return (

    <AppContext.Provider value={propTypes}>
      <div className='tutto'>

        <Navbar></Navbar>
        {!checked && <Cards />}{" "}
        {checked && <Textarea />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
