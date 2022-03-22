import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

import DisplayPhotos from "./DisplayPhotos";
import PhotoForm from "./PhotoForm";

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [photoOrientation, setPhotoOrientation] = useState(null);
  
  useEffect(() => {

    if (photoOrientation !== null) {

      axios({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        dataResponse: "json",
        params: {
          client_id: "SPWoYE3TRrK7rkvIR2uFqa0RuCJ-tfaeJvWqFzdyd-w",
          query: "puppies",
          per_page: 30,
          orientation: photoOrientation
        },
      }).then((res) => {
  
        setAllPhotos(res.data.results);
      });

    }

  }, [photoOrientation]);

  const getPhotos = (e, orientation) => {
    e.preventDefault();

    setPhotoOrientation(orientation);
  };

  return (
    <div className="App">
      <header>
        <h1>Show me puppies!</h1>
      </header>
      <PhotoForm getPhotos={getPhotos} />
      <DisplayPhotos photos={allPhotos} />
    </div>
  );
}

export default App;