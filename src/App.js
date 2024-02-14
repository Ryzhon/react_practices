import React from 'react';
import './App.css';
import NoteApp from './NoteApp';
import { AuthProvider } from './AuthContext';

const App = () => (
  <AuthProvider>
    <NoteApp />
  </AuthProvider>
);

export default App;
