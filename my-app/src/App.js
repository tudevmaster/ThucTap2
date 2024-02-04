import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Body from "./component/Body";
import Sliders from "./component/Sliders";
import Rent from "./component/Rent";
import Agent from "./component/Agent";
import Form from "./component/Form";
import Customer from "./component/Customer";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Body></Body>
      <Sliders></Sliders>
      <Rent></Rent>
      <Agent></Agent>
      <Form></Form>
      <Customer></Customer>
      <Footer></Footer>
    </div>
  );
}

export default App;
