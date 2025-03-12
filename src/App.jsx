import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home"; 
import MovieDetail from "./pages/MovieDetail"; 
import "./styles/App.scss"; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 시 상태 업데이트
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 시 상태 업데이트
    localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 제거
  };

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} /> {/* 홈 페이지 */}
        <Route path="/home" element={<Home />} /> {/* /home 경로 추가 */}
        <Route path="details/:id" element={<MovieDetail />} />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

// 로그인 컴포넌트
const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // 로그인 시 상태 업데이트
    navigate("/"); // 홈으로 이동
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>로그인</h2>
        <input type="text" placeholder="이메일" required />
        <input type="password" placeholder="비밀번호" required />
        <button onClick={handleLogin}>로그인</button>
        <p>
          아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
};

// 회원가입 컴포넌트
const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // 회원가입 로직 추가 필요
    navigate("/login"); // 회원가입 후 로그인 페이지로 이동
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>회원가입</h2>
        <input type="text" placeholder="이메일" required />
        <input type="password" placeholder="비밀번호" required />
        <input type="password" placeholder="비밀번호 확인" required />
        <button onClick={handleSignup}>회원가입</button>
        <p>
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default App;
