// hoja de estilo
import "./App.css";
import Saludo1 from "./components/Saludo1";
import Saludo2 from "./components/Saludo2";
import Saludo3 from "./components/Saludo3";

const friend = "my friend";

function App() {
  return (
    <>
      <Saludo1 />
      <Saludo2 nuevosaludo={friend} estado={true} />
      <Saludo3 />
    </>
  );
}

export default App;
