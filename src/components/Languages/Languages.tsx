import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Language } from '../../types/language';
import './Languages.css';

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
        <div className='content_vs'>
            <h2 className='title'>Languages</h2>
            <div className='content-section'>
                <h3 className='category__table__title'>Languages</h3>
                <table className="languages__table content-table-wrapper">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {languages.map(language => (
                            <tr key={language.language_id}>
                                <td>{language.code}</td>
                                <td>{language.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Languages;
