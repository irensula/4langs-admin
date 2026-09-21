export type ContentType = 'word' | 'sentence' | 'text';

export interface ContentTranslation {
    content_translation_id: number;
    content_id: number;
    language_id: number;
    language_code: string;
    value: string;
    answer_value: string | null;
    sound_path: string | null;
    title: string | null;
    created_at: string;
    updated_at: string;
}

export interface Content {
    content_id: number;
    type: ContentType;
    slug: string;
    image_path: string | null;
    category_id: number | null;
    created_at: string;
    updated_at: string;
}

export interface ContentWithTranslations extends Content {
    translations: ContentTranslation[];
}