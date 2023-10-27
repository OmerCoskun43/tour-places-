import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { data } from "./helper/data";
import "./App.scss";

function App() {
  // console.log(data);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;
