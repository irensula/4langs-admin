import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Category } from '../../types/category';
import { formatDate } from '../../utils/formateDate';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        adminService.getCategories()
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching languages: ', error);
            });
    }, []);

    return (
        <div className='content_s'>
            <h2 className='title'>Categories</h2>
            <div className='content-section'>
                <h3 className='category__table__title'>Categories</h3>
                <table className="categories__table content-table-wrapper">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Slug</th>
                            <th>Image</th>
                            <th>Language</th>
                            <th>Translation</th>
                            <th>Created</th>
                            <th>Updated</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map(category => (
                            <tr key={category.category_id}>
                                <td>{category.sort_order}</td>
                                <td>{category.slug}</td>
                                <td>{category.image_path}</td>
                                <td>{category.language}</td>
                                <td>{category.translation}</td>
                                <td>{formatDate(category.created_at)}</td>
                                <td>{formatDate(category.updated_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories;