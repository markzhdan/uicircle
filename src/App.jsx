import "./App.css";
import splash from "./assets/UICircle_Full.png";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <img src={splash} alt="UICircle splash logo" height={300} width={400} />
      <MainPage />
    </div>
  );
}

export default App;
