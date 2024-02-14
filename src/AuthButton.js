import React from 'react';
import { useAuth } from './AuthContext';

const AuthButton = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={login} className="login-button">
          ログイン
        </button>
      ) : (
        <button onClick={logout} className="logout-button">
          ログアウト
        </button>
      )}
    </div>
  );
};

export default AuthButton;
