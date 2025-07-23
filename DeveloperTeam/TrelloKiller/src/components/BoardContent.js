import React from 'react';
import List from './List';

const BoardContent = () => {
  // Sample data based on the design mockups
  const lists = [
    {
      id: 1,
      title: 'To Do',
      cards: [
        {
          id: 1,
          title: 'Design user interface',
          description: 'Create wireframes and mockups for the main dashboard layout including navigation, board views, and card interactions',
          metadata: [
            { type: 'date', value: 'Dec 15', overdue: false },
            { type: 'label', value: 'Design' }
          ]
        },
        {
          id: 2,
          title: 'Setup development environment',
          description: null,
          metadata: [
            { type: 'label', value: 'Backend' },
            { type: 'assignee', value: 'Alex' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        {
          id: 3,
          title: 'Implement drag and drop functionality',
          description: 'Add drag and drop support for cards between lists using react-beautiful-dnd library with smooth animations',
          metadata: [
            { type: 'assignee', value: 'Jordan' },
            { type: 'status', status: 'in-progress', value: 'In Progress' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Done',
      cards: [
        {
          id: 4,
          title: '✅ Project setup and planning',
          description: 'Initial project structure and team coordination completed successfully',
          metadata: [
            { type: 'assignee', value: 'Team' },
            { type: 'status', status: 'completed', value: 'Completed Dec 10' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="board-content">
      <div className="lists-container">
        {lists.map(list => (
          <List
            key={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardContent;