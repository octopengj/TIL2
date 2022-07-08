import Header from "./components/Header";
import Prototypes from "./components/Porototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
