import React, { useState, useEffect } from "react";
import '../styles/App.scss';

const Signup = ({ setUsers, isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 사용자 데이터를 불러옵니다.
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, [setUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    
    // 새로운 사용자 추가
    const newUser = { email, password };
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers)); // 로컬 스토리지에 저장
      return updatedUsers;
    });
    alert("회원가입 성공!");
  };

  return (
    <div className={`auth-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className={isDarkMode ? 'text-white' : 'text-black'}>회원가입</h2>
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
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className={`input-field ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        />
        <button type="submit" className={`submit-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>회원가입</button>
      </form>
      <p>이미 계정이 있으신가요? <a href="/login" className="auth-link">로그인</a></p>
    </div>
  );
};

export default Signup;
