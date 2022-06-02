import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import PasswordGet from "./PasswordGet";
import Restore from "./Restore";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/get_password" exact element={<PasswordGet />} />
        <Route path="/restore" exact element={<Restore />} />
      </Routes>
    </div>
  );
}

export default App;
