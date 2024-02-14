import React from 'react';
import { useAuth } from './AuthContext';

const AuthButton = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={login}>
          ログイン
        </button>
      ) : (
        <button onClick={logout}>
          ログアウト
        </button>
      )}
    </div>
  );
};

export default AuthButton;
