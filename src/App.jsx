// import "./App.css";
// import Layout from "./components/Layout";
// import MainPage from "./pages/MainPage";
// import Messages from "./pages/Messages";
// import splash from "./assets/UICircle_Full.png";
// import MainPage from "./pages/MainPage";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <img src={splash} alt="UICircle splash logo" height={300} width={400} />
//       <MainPage />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Messages from "./pages/Messages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* iPhone layout here */}
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
