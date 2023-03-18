
import './App.css';
import { Navbar } from './component/Navbar';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <div  className="App">
        <Navbar />
        <div style={{ paddingBottom:"18rem"}}>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
