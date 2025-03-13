import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/App.scss';

const Navbar = ({ isLoggedIn, onLogout, toggleDarkMode, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // useNavigate 훅을 가져옵니다.

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?query=${searchTerm}`); // 검색어를 쿼리 파라미터로 전달
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="nav-content">
        <Link to="/" className={`logo ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>공주영화관</Link>

        <div className="search-form">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              className={`search-input ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
              placeholder="영화 제목 검색..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // 입력값 상태 업데이트
            />
            <button className={`search-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>검색</button>
          </form>
        </div>

        <div className="auth-links">
          {isLoggedIn ? (
            <button className="auth-button logout-button" onClick={onLogout}>로그아웃</button>
          ) : (
            <>
              <Link className={`auth-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/login">로그인</Link>
              <Link className={`auth-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/signup">회원가입</Link>
            </>
          )}
          <button className={`toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleDarkMode}>
            {isDarkMode ? '라이트 모드' : '다크 모드'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
