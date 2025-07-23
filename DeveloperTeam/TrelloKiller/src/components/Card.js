import React from 'react';

const Card = ({ title, description, metadata }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      {description && (
        <div className="card-description">{description}</div>
      )}
      {metadata && metadata.length > 0 && (
        <div className="card-metadata">
          {metadata.map((item, index) => (
            <div key={index} className="card-metadata-item">
              {item.type === 'date' && (
                <>
                  <span>📅</span>
                  <span className={item.overdue ? 'overdue' : ''}>{item.value}</span>
                </>
              )}
              {item.type === 'label' && (
                <span className="card-label">{item.value}</span>
              )}
              {item.type === 'assignee' && (
                <>
                  <span>👤</span>
                  <span>{item.value}</span>
                </>
              )}
              {item.type === 'status' && (
                <div className={`card-status ${item.status}`}>
                  {item.status === 'completed' && <span>✅</span>}
                  {item.status === 'in-progress' && <span>⏰</span>}
                  {item.status === 'overdue' && <span>⚠️</span>}
                  <span>{item.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;