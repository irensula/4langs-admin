import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Word } from '../../types/word';
import './Words.css';

const Words = () => {
    const [words, setWords] = useState<Word[]>([]);

    useEffect(() => {
        adminService.getWords()
            .then(data => {
                setWords(data);
            })
            .catch(error => {
                console.error('Error fetching languages: ', error);
            });
    }, []);

    return (
        <div className='content'>
            <h2 className='title'>Words</h2>
            <div className='content-section'>
                <h3 className='category__table__title'>Words</h3>
                <table className="words__table content-table-wrapper">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Word</th>
                            <th>Language</th>
                            <th>Value</th>
                            <th>Image path</th>
                            <th>Sound path</th>
                        </tr>
                    </thead>

                    <tbody>
                        {words.map(word => (
                            <tr key={word.content_id}>
                                <td>{word.category}</td>
                                <td>{word.word}</td>
                                <td>{word.language}</td>
                                <td>{word.value}</td>
                                <td>{word.image_path}</td>
                                <td>{word.sound_path}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Words;