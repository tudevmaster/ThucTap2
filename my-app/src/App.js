import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Body from "./component/Body";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
