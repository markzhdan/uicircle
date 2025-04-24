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
