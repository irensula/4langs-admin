import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Word } from '../../types/word';

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
        <div>
            <h2>Words</h2>
            <ul>
                {words.map(word => (
                    <li key={word.content_id}>
                        <p>{word.category}</p>
                        <p>{word.word}</p>
                        <p>{word.language}</p>
                        <p>{word.value}</p>
                        <p>{word.image_path}</p>
                        <p>{word.sound_path}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Words;