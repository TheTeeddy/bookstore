import Navbar from "./components/Navbar";

import '../src/css/main.min.css';

import '../src/css/style.min.css'
import Homepage from "./pages/Homepage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
const small = false;

function App() {
  return (
    <>
    <header>
      {small ? <Sidebar/> : <Navbar/>}
    </header>
      <Homepage/>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
