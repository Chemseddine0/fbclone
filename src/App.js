import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Main />
    </div>

  );
}

export default App;
