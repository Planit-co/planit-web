import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "./Pages/auth/SignupPage";
import SignInPage from "./Pages/auth/SignInPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;