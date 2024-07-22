import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
    title: "Title 1",
    description: "Description 1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    title: "Title 2",
    description: "Description 2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg",
    title: "Title 3",
    description: "Description 3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    title: "Title 4",
    description: "Description 4",
  },
];

function App() {
  return <Carousel slides={slides} />;
}

export default App;
