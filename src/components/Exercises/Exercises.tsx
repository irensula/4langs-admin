import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Exercise } from '../../types/exercise';
import { formatDate } from '../../utils/formateDate';

const Exercises = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);

    useEffect(() => {
        adminService.getExercises()
            .then(data => {
                setExercises(data);
            })
            .catch(error => {
                console.error('Error fetching languages: ', error);
            });
    }, []);

    return (
        <div>
            <h2>Exercises</h2>
            <ul>
                {exercises.map(exercise => (
                    <li key={exercise.exercise_id}>
                        <p>{exercise.sort_order}</p>
                        <p>{exercise.screen_name}</p>
                        <p>{exercise.max_score}</p>
                        <p>{exercise.language}</p>
                        <p>{exercise.translation}</p>
                        <p>{exercise.description}</p>
                        <p>{formatDate(exercise.created_at)}</p>
                        <p>{formatDate(exercise.updated_at)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Exercises;