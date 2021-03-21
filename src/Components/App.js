import "../Css/App.css";
import Header from "./Header";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [breeds, setBreeds] = useState([]); //declare state breeds to store list of breeds

  //ComponentDidMount: after mounting component useEffect is called to fetch api
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      setBreeds(response.data.message); //change state using setBreeds
    });
  }, []); //Empty dependency array for work as componentDidMount
  return (
    <div className="App">
      <Header breeds={breeds} />
      {/* Render Header Component and pass breeds state as props */}
      <Gallery breeds={breeds} />
      {/* Render Gallery Component and pass breeds state as props */}
    </div>
  );
}
