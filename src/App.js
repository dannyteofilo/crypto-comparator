import "./styles/styles.scss";
import { UserForm } from "./modules/userForm/UserForm";
import { CryptoComparator } from "./modules/cryptoComparator/CryptoComparator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/crypto" element={<CryptoComparator />} />
          <Route path="/" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
