import './App.css';
import LayoutView from "./views/LayoutView";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import HomeView from "./views/HomeView";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <LayoutView>
              <Routes>
                  <Route path="/" element={<HomeView />} />
              </Routes>
          </LayoutView>
      </div>
  );
}

export default App;
