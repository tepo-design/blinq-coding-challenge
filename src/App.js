import './App.css';
import Layout from "./global/Layout";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import HomeView from "./views/HomeView";
import {Route, Routes} from "react-router-dom";

export const INVITATION_POST_URL = "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth";

function App() {
  return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/" element={<HomeView />} />
              </Routes>
          </Layout>
      </div>
  );
}

export default App;
