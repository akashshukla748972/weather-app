import { useEffect } from "react";
import "./App.css";
import { getWeather } from "./api/weatherApi";
import { UseWeather } from "./context/Weather";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const weather = UseWeather();
  useEffect(() => {
    // get current location
    weather.fetchUserCurrentLocation();
  }, []);
  return (
    <>
      <main className="text-zinc-600">
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  );
}

export default App;
