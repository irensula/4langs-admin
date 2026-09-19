import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Language } from '../../types/language';

const Languages = () => {
    const [languages, setLanguages] = useState<Language[]>([]);

    useEffect(() => {
        adminService.getLanguages()
            .then(data => {
                setLanguages(data);
            })
            .catch(error => {
                console.error('Error fetching languages: ', error);
            });
    }, []);

    return (
        <div>
            <h2>Languages</h2>
            <ul>
                {languages.map(language => (
                    <li key={language.language_id}>
                        <p>{language.code}</p>
                        <p>{language.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Languages;
