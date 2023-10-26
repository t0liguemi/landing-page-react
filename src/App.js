import Navbar from "./elements/NavbarElement.jsx";
import Header from "./elements/HeaderElement.jsx";
import Card from "./elements/CardElement.jsx";
import Footer from "./elements/FooterElement.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="space-between row m-4 justify-content-between">
        <div className="col-12 col-md-4 my-2">
          <Card imageURL="https://picsum.photos/300/200?random=1"/>
        </div>
        <div className="col-12 col-md-4 my-2">
          <Card imageURL="https://picsum.photos/300/200?random=2"/>
        </div>
        <div className="col-12 col-md-4 my-2">
          <Card imageURL="https://picsum.photos/300/200?random=3"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
