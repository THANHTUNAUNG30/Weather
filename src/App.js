import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from "./components/Form";
import Card from "./components/Card";
import {api, api_key} from "./api/apiResource"
import { useEffect, useState } from "react";
import { WiDayFog, WiNightAltCloudyWindy } from "react-icons/wi";


function App() {

  const [city, setCity] = useState("Yangon");

  const [weatherData, setWeatherData] = useState({})

  const dataFetch = async(userCity) => {
  
    if(userCity !== undefined){
      setCity(userCity)
    }
    
    try{
      const response = await api.get(`/weather?q=${city}&appid=${api_key}&units=metric`)
    setWeatherData(response.data)
    }catch{
      console.log("Error");
    }
    
  }

  useEffect(()=>{
    dataFetch();
  },[city])


  
  return (
    <div className="App">
      <div>
      <h1 className="text-danger mt-4 text-center"> <WiDayFog /> Weather App <WiNightAltCloudyWindy /></h1>
        <hr />
        <Form dataFetch={dataFetch}/>
        <Card weatherData={weatherData}/>
        <hr />
      </div>
    </div>
  );
}

export default App;
