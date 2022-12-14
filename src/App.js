import React, {useState} from "react";
const api = {
  key: "355d630f4d4d938f0b80f8f52015103a",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key ==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric%APPID=${api.key}`)
        .then(res => res.json())
        .then (result => setWeather(result));
    }
  }
  
    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
  
    
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type='text'
            className="search-bar"
            placeholder="Search...."
          />
          </div>
            <div className="location-box">
              <div className="location">New York City</div>
              <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15F
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
