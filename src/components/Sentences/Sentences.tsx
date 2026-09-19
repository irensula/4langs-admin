import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Sentence } from '../../types/sentence';

const Sentences = () => {
    const [sentences, setSentences] = useState<Sentence[]>([]);

    useEffect(() => {
        adminService.getSentences()
            .then(data => {
                setSentences(data);
            })
            .catch(error => {
                console.error('Error fetching sentences: ', error);
            });
    }, []);

    return (
        <div>
            <h2>Sentences</h2>
            <ul>
                {sentences.map(sentence => (
                    <li key={sentence.content_id}>
                        <p>{sentence.slug}</p>
                        <p>{sentence.image_path}</p>
                        <p>{sentence.category}</p>
                        <p>{sentence.created_at}</p>
                        <p>{sentence.updated_at}</p>
                        <p>{sentence.language}</p>
                        <p>{sentence.value}</p>
                        <p>{sentence.answer_value}</p>
                        <p>{sentence.sound_path}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sentences;