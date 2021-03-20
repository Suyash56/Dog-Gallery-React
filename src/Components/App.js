import "../Css/App.css";
import Header from "./Header";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      setBreeds(response.data.message);
    });
  }, []);
  return (
    <div className="App">
      <Header breeds={breeds} />
      <Gallery breeds={breeds} />
    </div>
  );
}
