import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/App.scss';

const Login = ({ onLogin, isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 사용자 데이터를 불러옵니다.
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      onLogin();
      navigate("/");
    } else {
      alert("아이디가 존재하지 않습니다.");
    }
  };

  return (
    <div className={`auth-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className={isDarkMode ? 'text-white' : 'text-black'}>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="아이디"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`input-field ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={`input-field ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        />
        <button type="submit" className={`submit-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>로그인</button>
      </form>
      <p>아이디가 존재하지 않습니다.</p>
      <p>아직 계정이 없으신가요? <a href="/signup" className="auth-link">회원가입</a></p>
    </div>
  );
};

export default Login;
