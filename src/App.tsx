import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-pageBackground">
      <img src={logo} className="w-80 h-80"></img>
      <div className="w-[70%] h-32 bg-componentBackground border border-componentBorder"></div>
    </div>
  );
}

export default App;
