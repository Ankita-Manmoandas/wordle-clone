import "./App.scss";
import Nav from "./components/Nav/Nav";
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";

const App = () => {
  return (
    <div className="app">
     <Nav />
     <Grid />
     <Keyboard />

    </div>
  );
};

export default App;