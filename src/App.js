import "./styles/styles.scss";
import { UserForm } from "./modules/userForm/UserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/crypto" />
          <Route path="/" element={<UserForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
