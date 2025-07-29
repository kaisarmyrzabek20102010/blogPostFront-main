import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header"
import CreatePostopage from "./pages/CreatePostpage/CreatePostpage"

function App() {

  return (
    <>
    <Header /> 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/create" element={<CreatePostopage />} />
    </Routes>
    </>
  )
}

export default App
