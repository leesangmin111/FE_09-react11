import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/App.scss'; 

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/home?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(""); // 검색 후 입력 필드 초기화
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    onLogout(); // 부모 컴포넌트에서 로그아웃 처리
    navigate('/'); // 홈으로 리디렉션
  };

  return (
    <nav>
      <div className="nav-content">
        <Link to="/" className="logo">OZ무비</Link>
        <input
          type="text"
          className="search-input"
          placeholder="영화 제목 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>검색</button>
        <div className="auth-links">
          {isLoggedIn ? (
            <button className="auth-button logout-button" onClick={handleLogout}>로그아웃</button>
          ) : (
            <>
              <Link className="auth-button" to="/login">로그인</Link>
              <Link className="auth-button" to="/signup">회원가입</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
