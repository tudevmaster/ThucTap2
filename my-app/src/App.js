import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Body from "./component/Body";
import Sliders from "./component/Sliders";
import Rent from "./component/Rent";
import Agent from "./component/Agent";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Body></Body>
      <Sliders></Sliders>
      <Rent></Rent>
      <Agent></Agent>
    </div>
  );
}

export default App;
