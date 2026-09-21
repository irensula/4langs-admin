import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Exercise } from '../../types/exercise';
import { formatDate } from '../../utils/formateDate';
import './Exercises.css';

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
        <div className='content_m'>
            <h2 className='title'>Exercises</h2>
            <div className='content-section'>
                <h3 className='category__table__title'>Exercises</h3>
                <table className="exercises__table content-table-wrapper">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Screen name</th>
                            <th>Max score</th>
                            <th>Language</th>
                            <th>Translation</th>
                            <th>Description</th>
                            <th>Created</th>
                            <th>Updated</th>
                        </tr>
                    </thead>

                    <tbody>
                        {exercises.map(exercise => (
                            <tr key={exercise.exercise_id}>
                                <td>{exercise.sort_order}</td>
                                <td>{exercise.screen_name}</td>
                                <td>{exercise.max_score}</td>
                                <td>{exercise.language}</td>
                                <td>{exercise.translation}</td>
                                <td>{exercise.description}</td>
                                <td>{formatDate(exercise.created_at)}</td>
                                <td>{formatDate(exercise.updated_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Exercises;