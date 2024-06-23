// src/App.js
import React, { useState } from "react";
import useStore from "./store/store";

function App() {
  const { weather, setCity, fetchWeather } = useStore();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setCity(inputValue);
    fetchWeather();
  };

  return (
    <div>
      <h1> 날씨를 알려드립니다 </h1>{" "}
      <div>
        <input
          placeholder='도시 이름을 영어로 검색해 보세요'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />{" "}
        <button onClick={handleSearch}> 검색 </button>{" "}
      </div>{" "}
      {weather && (
        <>
          <h2> {weather.name} </h2> <div> 온도: {weather.main.temp}° C </div>{" "}
          <div> 날씨: {weather.weather[0].description} </div>{" "}
        </>
      )}{" "}
    </div>
  );
}

export default App;
