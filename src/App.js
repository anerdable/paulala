import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="Main-content">
        <MainContent />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
