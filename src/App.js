import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='appContainer'>
      <Navbar/>
      <Dashboard />
    </div>
  );
}

export default App;
