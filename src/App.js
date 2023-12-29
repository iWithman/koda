import Navigation from "./components/navigation/navigation.component";
import Ribbon from "./components/ribbon/ribbon.component";
import AllRoutes from "./components/routes";

import './components/ribbon/ribbon.scss'

const Banner = () => {
  return ( 
    <>
      <div className="banner">
        KODA 
      </div>
    </>
   );
}

function App() {
  return (
    <div className="App"
      style={{
        position: "relative",
      }}
    >
      <Banner />
      <Ribbon />
      <Navigation />
      <AllRoutes />
    </div>
  );
}

export default App;
