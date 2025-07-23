import React from 'react';
import './App.css';
import BoardHeader from './components/BoardHeader';
import BoardContent from './components/BoardContent';

function App() {
  return (
    <div className="app">
      <div className="app-titlebar">TrelloKiller</div>
      <BoardHeader title="Project Dashboard" />
      <BoardContent />
    </div>
  );
}

export default App;