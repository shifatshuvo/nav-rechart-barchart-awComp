import LineChart from "./components/LineChart/LineChart";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/NavBar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import "./App.css";

function App() {
  return (
    <>
      {/* <DaisyNav /> */}
      <Navbar />
      <LineChart />
      <PriceOptions />
      <Phones />
    </>
  );
}

export default App;
