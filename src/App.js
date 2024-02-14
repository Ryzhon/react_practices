import React from 'react';
import './styles/App.css';
import NoteApp from './NoteApp';
import { AuthProvider } from './contexts/AuthContext';

const App = () => (
  <AuthProvider>
    <NoteApp />
  </AuthProvider>
);

export default App;
