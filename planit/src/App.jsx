import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Landing-page/HomePage";
import SignupPage from "./Pages/Auth/SignupPage";
import SignInPage from "./Pages/Auth/SignInPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;