import React from "react";
import {useState} from 'react'
import Weather from "./components/Weather";
import Form from "./components/Form";
import City from "./components/City";

import axios from 'axios'




function App() {

// Hooks definition
const [data, setData] = useState({});
const [location, setLocation] = useState('');

// Variable to store the Api url
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8af122e38baba0a04bef87f02ceaa5d6`


  // function to fetch data
  const fetchData = async() => {
      try {
        const response = await axios.get(url);
        setData(response.data)
        console.log(data)
      }catch(e){
        console.error(e)
      }
  }

  // -------------
  const handleSubmit = (event) => {
    event.preventDefault();

    // do not submit on empty
    if(!location) return;
    setLocation('');

    console.log('submitted!!')
  }

  const handleClick = () => {
    console.log('you clicked...')
  }
  
  return (
    <section className="App">
      <main>
        
        <div className="display">
            <Form 
              location={location}
              setLocation={setLocation}
              handleSubmit={handleSubmit}
              handleClick={handleClick}
              fetchData={fetchData}
            />

            <City 
              data={data}
            />

          <div className="weather">
              <Weather 
                data={data}
            />
          </div>
          
        </div>
      </main>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
    </section>
  );
}

export default App;
