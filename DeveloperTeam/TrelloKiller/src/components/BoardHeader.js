import React from 'react';

const BoardHeader = ({ title }) => {
  return (
    <div className="board-header">
      <div className="board-title">
        <span className="board-icon">📋</span>
        {title}
      </div>
      <button className="add-list-btn">
        <span>+</span>
        Add List
      </button>
    </div>
  );
};

export default BoardHeader;