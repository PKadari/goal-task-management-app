import React from 'react';
import GoalList from '../components/GoalList';
import TaskList from '../components/TaskList';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Goal and Task Management</h1>
            <GoalList />
            <TaskList />
        </div>
    );
};

export default HomePage;