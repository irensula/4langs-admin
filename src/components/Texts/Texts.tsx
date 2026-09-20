import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Text } from '../../types/text';

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
        <div>
            <h2>Texts</h2>
            <ul>
                {texts.map(text => (
                    <li key={text.content_id}>
                        <p>{text.language}</p>
                        <p>{text.title}</p>
                        <p>{text.value}</p>
                        <p>{text.sound_path}</p>
                        <p>{text.image_path}</p>
                        <p>{text.category}</p>
                        <p>{text.created_at}</p>
                        <p>{text.updated_at}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Texts;