import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Sentence } from '../../types/sentence';
import './Sentences.css';

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
        <div className='content'>
            <h2 className='title'>Sentences</h2>
            <div className='content-section'>
                <h3 className='category__table__title'>Sentences</h3>
                <table className="content-table-wrapper">
                    <thead>
                        <tr>
                            <th>Slug</th>
                            <th>Image path</th>
                            <th>Category</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                            <th>Language</th>
                            <th>Value</th>
                            <th>Answer value</th>
                            <th>Sound path</th>
                        </tr>
                    </thead>

                    <tbody>
                        {sentences.map(sentence => (
                            <tr key={sentence.content_id}>
                                <td>{sentence.slug}</td>
                                <td>{sentence.image_path}</td>
                                <td>{sentence.category}</td>
                                <td>{sentence.created_at}</td>
                                <td>{sentence.updated_at}</td>
                                <td>{sentence.language}</td>
                                <td>{sentence.value}</td>
                                <td>{sentence.answer_value}</td>
                                <td>{sentence.sound_path}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sentences;