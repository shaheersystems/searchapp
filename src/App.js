import "./App.css";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import Container from "./components/Container";
import Card from "./components/Card";
import Heading from "./components/Heading";
function App() {
  return (
    <div className="App">
      <Container>
        <Banner />
        <SearchBar />
        <Heading />
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
}

export default App;
