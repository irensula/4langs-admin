import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Category } from '../../types/category';
import { formatDate } from '../../utils/formateDate';

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
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.category_id}>
                    <p>{category.sort_order}</p>
                    <p>{category.slug}</p>
                    <p>{category.image_path}</p>
                    <p>{category.language}</p>
                    <p>{category.translation}</p>
                    <p>{formatDate(category.created_at)}</p>
                    <p>{formatDate(category.updated_at)}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;