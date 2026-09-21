import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { ContentWithTranslations, ContentTranslation, ContentType } from '../../types/content';
import './Content.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faVolume, faPen, faBroom } from '@fortawesome/free-solid-svg-icons';

function Content() {
    const [content, setContent] = useState<ContentWithTranslations[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const categoryId = 1;

    useEffect(() => {
        const loadContent = async () => {
            try {
                setLoading(true);

                const data = await adminService.getCategoryContent(categoryId);
                setContent(data);
            } catch (error) {
                console.error(error);
                setError('Failed to load category content');
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, [categoryId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const words = content.filter(item => item.type === 'word');
    const sentences = content.filter(item => item.type === 'sentence');
    const texts = content.filter(item => item.type === 'text');

    return (
        <div className="content">
            <h2 className='title__category'>Content by category, id {categoryId}</h2>

            <ContentSection
                title="Words"
                items={words}
            />

            <ContentSection
                title="Sentences"
                items={sentences}
            />

            <ContentSection
                title="Texts"
                items={texts}
            />
        </div>
    );
}

interface ContentSectionProps {
    title: string;
    items: ContentWithTranslations[];
}

function ContentSection({
    title,
    items,
}: ContentSectionProps) {
    return (
        <section className="content-section">
            <div className="content-section__header">
                <h3 className='category__table__title'>{title}, {items.length}</h3>
            </div>

            {items.length === 0 ? (
                <p>No {title.toLowerCase()}.</p>
            ) : (
                <div className="content-table-wrapper">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Content</th>
                                <th>Image</th>
                                <th>EN</th>
                                <th>FI</th>
                                <th>UK</th>
                                <th>RU</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item) => (
                                <ContentRow
                                    key={item.content_id}
                                    item={item}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

interface ContentRowProps {
    item: ContentWithTranslations;
}

function ContentRow({ item }: ContentRowProps) {
    const translations = Object.fromEntries(
        item.translations.map((translation) => [
            translation.language_code,
            translation,
        ])
    );
    const API_URL = 'https://study-languages.up.railway.app';

    return (
        <tr>
            <td>{item.slug}</td>

            <td>
                {item.image_path && (
                    <img
                        src={`${API_URL}${item.image_path}`}
                        alt={item.slug}
                        className="content-table__image"
                    />
                )}
            </td>

            <TranslationCell
                translation={translations.en}
                type={item.type}
            />

            <TranslationCell
                translation={translations.fi}
                type={item.type}
            />

            <TranslationCell
                translation={translations.uk}
                type={item.type}
            />

            <TranslationCell
                translation={translations.ru}
                type={item.type}
            />

            <td className="content-table__actions">
                <button className='edit__button'>
                    <FontAwesomeIcon icon={faPen} />
                    Edit
                </button>
                <button className='delete__button'>
                    <FontAwesomeIcon icon={faBroom} />
                    Delete
                </button>
            </td>
        </tr>
    );
}

interface TranslationCellProps {
    translation: ContentTranslation | undefined;
    type: ContentType;
}

function TranslationCell({
    translation,
    type,
}: TranslationCellProps) {
    if (!translation) {
        return <td>—</td>;
    }

    return (
        <td className="content-table__translation">
            {type === 'text' && translation.title && (
                <strong className="content-table__title">
                    {translation.title}
                </strong>
            )}

            <p className="content-table__value">
                {translation.value}
            </p>

            {type === 'sentence' && translation.answer_value && (
                <p className="content-table__answer">
                    <span className='answer__span'>Answer:</span> {translation.answer_value}
                </p>
            )}

            {translation.sound_path && (
                <p className="content-table__sound">
                    <FontAwesomeIcon icon={faVolume} />
                </p>
            )}
        </td>
    );
}

export default Content;