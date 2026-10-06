import "./App.css";

import Navbar from "./Component/Navbar";
import Herosection from "./Component/Herosection";
import Movierow from "./Component/Movierow";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Movierow />
      <Footer />
    </>
  );
}

export default App;