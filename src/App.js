import "./App.css";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import Container from "./components/Container";
import Card from "./components/Card";
import Heading from "./components/Heading";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    var lowerCase = event.target.value.toLowerCase();
    setInput(lowerCase);
  };
  const data = [
    {
      id: 1,
      title: "Deep",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 2,
      title: "Butcher",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 3,
      title: "Hughie",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 4,
      title: "Starlight",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 5,
      title: "Solierboy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 6,
      title: "Homelander",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 7,
      title: "A-Train",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 8,
      title: "Black Noir",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 9,
      title: "Super Sonic",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 10,
      title: "Frenchie",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 11,
      title: "Kimiko",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 12,
      title: "Maeve",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 13,
      title: "Storm Front",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 14,
      title: "Stan Edgar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
    {
      id: 15,
      title: "Marvin",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis ut",
    },
  ];
  const filteredData = data.filter((item) => {
    if (input === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(input);
    }
  });
  return (
    <div className="App">
      <Container>
        <Banner />
        <SearchBar inputHandler={inputHandler} />
        <Heading />
        <div className="cards">
          {filteredData.map((item) => {
            return <Card key={item.id} title={item.title} text={item.text} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
