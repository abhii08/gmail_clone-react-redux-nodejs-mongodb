import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
