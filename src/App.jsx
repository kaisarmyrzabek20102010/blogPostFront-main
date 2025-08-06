import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header"
import CreatePostopage from "./pages/CreatePostpage/CreatePostpage"
import PasswordPage from "./pages/password/Password.jsx"
import Cards from "./pages/cards/Cards.jsx"
import Profile from './pages/profile/profile.jsx'

function App() {

  return (
    <>
    <Header /> 
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/create" element={<CreatePostopage />} />
      <Route path="/password" element={<PasswordPage />} />
    </Routes>
    </>
  )
}

export default App
