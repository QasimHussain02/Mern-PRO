import { Route, Routes } from "react-router";
import Start from "./Pages/Start";
import { Home } from "./Pages/Home";
import UserSignup from "./Pages/UserSignup";
import UserLogin from "./Pages/UserLogin";
import CaptainLogin from "./Pages/CaptainLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import { Layout } from "./Pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/CaptainLogin" element={<CaptainLogin />} />
        <Route path="/CaptainSignup" element={<CaptainSignup />} />
      </Route>
    </Routes>
  );
}

export default App;
