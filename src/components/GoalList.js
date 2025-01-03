import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import TaskList from './TaskList';

const GoalList = () => {
    const [goals, setGoals] = useLocalStorage('goals', []);

    const handleGoalClick = (goal) => {
        // Logic to open TaskList for the selected goal
    };

    return (
        <div>
            <h2>Goals</h2>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id} onClick={() => handleGoalClick(goal)}>
                        <h3>{goal.title}</h3>
                        <progress value={goal.completedTasks} max={goal.totalTasks}></progress>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoalList;