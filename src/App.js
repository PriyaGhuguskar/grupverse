import './App.css';
import BottomCompo from './components/BottomCompo';
import NavCompo from './components/NavCompo';
import PageCompo from './components/PageCompo';

function App() {
  return (
    <div className="App">
      <NavCompo />
      <PageCompo />
      <BottomCompo />
    </div>
  );
}

export default App;
