import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Text } from '../../types/text';
import './Texts.css';

const Texts = () => {
    const [texts, setTexts] = useState<Text[]>([]);

    useEffect(() => {
        adminService.getTexts()
            .then(data => {
                setTexts(data);
            })
            .catch(error => {
                console.error('Error fetching texts: ', error);
            });
    }, []);

    return (
        <div className='content'>
            <h2 className='title'>Texts</h2>
            <div className='content-section'>
                <h3 className='category__table__title'>Texts</h3>
                <table className="texts__table content-table-wrapper">
                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Title</th>
                            <th>Value</th>
                            <th>Sound path</th>
                            <th>Image path</th>
                            <th>Category</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                        </tr>
                    </thead>

                    <tbody>
                        {texts.map(text => (
                            <tr key={text.content_id}>
                                <td>{text.language}</td>
                                <td>{text.title}</td>
                                <td>{text.value}</td>
                                <td>{text.sound_path}</td>
                                <td>{text.image_path}</td>
                                <td>{text.category}</td>
                                <td>{text.created_at}</td>
                                <td>{text.updated_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Texts;