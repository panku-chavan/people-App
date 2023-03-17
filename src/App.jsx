
import './App.css';
import { Navbar } from './component/Navbar';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <body style={{ backgroundColor: "pink" }}>
      <div  className="App">
        <Navbar />
        <div style={{ paddingBottom:"18rem"}}>
          <AllRoutes />
        </div>
      </div>
    </body>
  );
}

export default App;
