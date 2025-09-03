import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./Components/Layouts/MainLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
